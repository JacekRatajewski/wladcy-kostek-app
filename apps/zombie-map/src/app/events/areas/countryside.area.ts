import { Area } from '../area.enum';
import { BaseArea } from './base.area';

export class CountrysideArea implements BaseArea {
  areas = [
    Area.BoundaryState,
    Area.BoundaryCountry,
    Area.PlaceOther,
    Area.PlaceSuburb,
    Area.PlaceVillage,
    Area.PlaceTown,
    Area.PlaceCity,
    Area.PlaceCityLarge,
    Area.PlaceState,
    Area.PlaceCountryOther,
    Area.PlaceCountryMinor,
    Area.PlaceCountryMajor,
  ];
  events = [
    'Przybyliście do małego miasteczka, ale mieszkańcy odmówili wam schronienia – Zainfekowani byli już blisko',
    'Znaleźliście opuszczoną chatę w lesie, ale okazało się, że w środku są zamknięci Zainfekowani',
    'Mieszkańcy wsi uwierzyli, że wirus to kara boska – odmówili walki z Zainfekowanymi, chcąc czekać na sąd ostateczny',
    'Stare gospodarstwo wydawało się bezpieczne, ale dźwięk maszyn rolniczych przyciągnął hordę Zainfekowanych',
    'Wasz samochód ugrzązł w polnej drodze, a Zainfekowani zbliżali się z lasu – musieliście uciekać pieszo',
    'Wiejskie gospodarstwo pełne zwierząt przyciągnęło Zainfekowanych – musieliście walczyć o przetrwanie',
    'Znaleźliście stary młyn na odludziu – w środku były zapasy, ale drzwi do budynku były zamknięte',
    'Most prowadzący do wsi został zniszczony – musieliście znaleźć inny sposób, by przedostać się na drugą stronę, zanim dotrze horda',
    'Podczas ucieczki przez pola natknęliście się na grupę ocalałych, którzy byli podejrzliwi wobec was i nie chcieli pomóc',
];
  name = 'countryside';
}
