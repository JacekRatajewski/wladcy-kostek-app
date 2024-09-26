import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as maplibregl from 'maplibre-gl';
import { EventsService } from '../events/events.service';
import { Area } from '../events/area.enum';
import { LocalstorageService } from '../localstorage.service';
import { BehaviorSubject, Subject } from 'rxjs';

function showError(error: any) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log('User denied the request for Geolocation.');
      break;
    case error.POSITION_UNAVAILABLE:
      console.log('Location information is unavailable.');
      break;
    case error.TIMEOUT:
      console.log('The request to get user location timed out.');
      break;
    case error.UNKNOWN_ERROR:
      console.log('An unknown error occurred.');
      break;
  }
}
@Component({
  standalone: true,
  imports: [RouterModule],
  providers: [EventsService, LocalstorageService],
  selector: 'wladcy-kostek-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit {
  @ViewChild('zombieMap') zombieMap!: ElementRef;
  @ViewChild('popup') popup!: ElementRef;
  newFeatures$: Subject<any[]> = new Subject<any[]>();
  features$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  addedEvents: any[] = [];
  featureCount = 0;
  startTime!: any;
  fourHoursInMilliseconds = 15 * 60 * 1000;
  initialDelay = 60 * 1000;
  finalDelay = 1000;
  count = 10;
  progress = 0;
  loaded = false;
  constructor(private es: EventsService, private ls: LocalstorageService) {}

  ngAfterViewInit(): void {
    const options = {
      enableHighAccuracy: true, // Request high accuracy if available
      timeout: 5000, // Set timeout to 5 seconds
      maximumAge: 0, // Do not use cached location data
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(`Latitude: ${position.coords.latitude}`);
        console.log(`Longitude: ${position.coords.longitude}`);
      },
      showError,
      options
    );
    this.ls.get$('features', this.features$);
    const map = new maplibregl.Map({
      center: { lat: 53.15142289006538, lng: 16.73766286078557 },
      zoom: 15,
      container: 'zombie-map',
      style: `https://maps.geoapify.com/v1/styles/dark-matter/style.json?apiKey=${process.env.GEOAPI_KEY}`,
    });

    (this.popup.nativeElement as HTMLDivElement).onclick = (el) => {
      (el.currentTarget as HTMLDivElement).classList.remove('opened');
    };
    map.on('load', () => {
      map.setPaintProperty(Area.Water, 'fill-color', '#990000');
      map.setPaintProperty(Area.HighwayPath, 'line-color', '#660000');
      map.setPaintProperty(Area.HighwayMinor, 'line-color', '#550000');
      map.setPaintProperty(Area.HighwayMajorCasing, 'line-color', '#440000');
      map.setPaintProperty(Area.HighwayMajorInner, 'line-color', '#770000');
      map.setPaintProperty(Area.HighwayMotorwayCasing, 'line-color', '#550000');
      map.setPaintProperty(Area.HighwayMotorwayInner, 'line-color', '#880000');
      map.setPaintProperty(Area.HighwayNameOther, 'text-color', '#FF6666');
      map.setPaintProperty(Area.HighwayNameMotorway, 'text-color', '#FF8888');
      map.setPaintProperty(Area.HighwayNameOther, 'text-halo-color', '#440000');
      map.setPaintProperty(Area.HighwayNameOther, 'text-halo-width', 1.5);
      map.setPaintProperty(
        Area.HighwayNameMotorway,
        'text-halo-color',
        '#550000'
      );
      map.setPaintProperty(Area.HighwayNameMotorway, 'text-halo-width', 1.5);
      map.setPaintProperty(Area.Building, 'fill-outline-color', '#AA0000');
      map.setPaintProperty(Area.Building, 'fill-color', '#330000');
      map.addControl(new maplibregl.NavigationControl());
    });
    this.features$.subscribe((features) => {
      if (!this.loaded)
        map.once('render', () => {
          if (features !== null) {
            this.count = features.length > 0 ? features.length : 10;
            this.newFeatures$.next(features);
            this.clearMapOfEvents(map);
            if (!map.getSource('events')) {
              map.addSource('events', {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: this.features$.value,
                },
              });
              map.addLayer({
                id: 'event-circles',
                type: 'circle',
                source: 'events',
                paint: {
                  'circle-color': '#00c200',
                  'circle-radius': 4,
                  'circle-stroke-width': 1,
                  'circle-stroke-color': '#000000',
                },
              });
            }
            this.runWithVaryingInterval(map);
          }
        });
      this.loaded = true;
    });

    map.on('click', 'event-circles', (e: any) => {
      const el = this.popup.nativeElement as HTMLDivElement;
      this.es
        .getEventDescription((e.features[0].properties?.title as string) ?? '')
        .then((data: string | null) => {
          el.classList.remove('opened');
          el.classList.add('opened');
          el.innerHTML = data ?? '';
          // Statyczne wymiary popupu
          const popupWidth = 450;
          const popupHeight = 200;

          // Wymiary okna przeglądarki
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;

          // Współrzędne kliknięcia
          let left = e.point.x;
          let top = e.point.y;

          // Sprawdzenie, czy popup wyjdzie poza prawą krawędź
          if (left + popupWidth > viewportWidth) {
            left = viewportWidth - popupWidth;
          }

          // Sprawdzenie, czy popup wyjdzie poza dolną krawędź
          if (top + popupHeight > viewportHeight) {
            top = viewportHeight - popupHeight;
          }

          // Sprawdzenie, czy popup wyjdzie poza lewą krawędź
          if (left < 0) {
            left = 0;
          }

          // Sprawdzenie, czy popup wyjdzie poza górną krawędź
          if (top < 0) {
            top = 0;
          }

          // Ustawienie pozycji popupu
          el.style.left = `${left}px`;
          el.style.top = `${top}px`;
        });
    });
    this.newFeatures$.subscribe({
      next: (values) => {
        this.features$.next([...this.features$.value, ...values]);
        values.forEach((value) => {
          this.ls.set('features', value);
        });
      },
    });
  }

  runWithVaryingInterval(map: any) {
    this.startTime = Date.now();
    const loop = () => {
      const currentDelay = this.calculateNextDelay();

      if (Date.now() - this.startTime < this.fourHoursInMilliseconds) {
        setTimeout(() => {
          this.generateRandomEvents(map);
          this.count += Math.floor(Math.random() * 10 + 1);
          loop();
        }, currentDelay);
        console.log(
          `Nowe ewenty: [${this.count}], Odstęp: [${(
            currentDelay /
            60 /
            1000
          ).toFixed(2)}min], Progres: [${Math.round(this.progress)}/100]`
        );
      } else {
        this.runWithVaryingInterval(map);
      }
    };
    loop();
  }

  calculateNextDelay() {
    const elapsedTime = Date.now() - this.startTime;
    this.progress = elapsedTime / this.fourHoursInMilliseconds;

    const currentDelay =
      this.initialDelay - (this.initialDelay - this.finalDelay) * this.progress;
    return Math.max(this.finalDelay, currentDelay);
  }

  analyzeMapData(map: maplibregl.Map) {
    const visibleFeatures = map.queryRenderedFeatures();
    const visibleFeaturesWithoutCircles = visibleFeatures.filter(
      (x) => x.layer.id !== 'event-circles'
    );
    const randomFeatures = this.getRandomFeatures(
      visibleFeaturesWithoutCircles,
      this.count
    );
    return randomFeatures;
  }

  getRandomFeatures(
    features: any,
    count: number
  ): maplibregl.MapGeoJSONFeature[] {
    const shuffled = [...features].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, features.length));
  }

  generateRandomEvents(map: maplibregl.Map) {
    const randomFeatures = this.analyzeMapData(map);
    if (randomFeatures) this.addEventsToMap(map, randomFeatures);
  }

  addEventsToMap(map: maplibregl.Map, areas: maplibregl.MapGeoJSONFeature[]) {
    const features = this.generateEventFeatures(areas);
    const difference = features.filter((x) =>
      this.features$.value.filter(
        (z) =>
          (z.geometry as any).coordinates !== (x.geometry as any).coordinates
      )
    );
    if (this.features$.value.length > 0) {
      this.newFeatures$.next([...difference]);
    } else {
      this.newFeatures$.next([...features]);
    }
    this.clearMapOfEvents(map);
    if (!map.getSource('events')) {
      map.addSource('events', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: this.features$.value,
        },
      });
      map.addLayer({
        id: 'event-circles',
        type: 'circle',
        source: 'events',
        paint: {
          'circle-color': '#00c200',
          'circle-radius': 4,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#000000',
        },
      });
    }
  }

  areCoordinatesEqual(coords1: any, coords2: any) {
    return coords1[0] === coords2[0] && coords1[1] === coords2[1];
  }

  generateEventFeatures(
    areas: maplibregl.MapGeoJSONFeature[]
  ): GeoJSON.Feature[] {
    return areas.map((area) => {
      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: (area.geometry as any).coordinates[0],
        },
        properties: {
          title: this.es.getRandomEvent(area.layer.id),
        },
      } as GeoJSON.Feature;
    });
  }

  clearMapOfEvents(map: maplibregl.Map) {
    // Sprawdź, czy warstwa istnieje przed jej usunięciem
    if (map.getLayer('event-circles')) {
      map.removeLayer('event-circles'); // Usunięcie warstwy kółek
    }

    // Sprawdź, czy źródło istnieje przed jego usunięciem
    if (map.getSource('events')) {
      map.removeSource('events'); // Usunięcie źródła eventów
    }
  }
}
