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
    'Zombifikowane zwierzęta domowe zaczynają atakować farmę',
    'Spalone pole kukurydzy skrywa zombie czających się na ofiary',
    'Mała wioska zostaje odcięta przez hordę',
    'Podziemne schrony w lesie są pełne zarażonych ocalałych',
    'Farma zostaje zaatakowana przez noc – ocalałych nie można znaleźć',
    'Miejscowy kościół staje się miejscem oblężenia przez zombie',
    'Przydrożna gospoda ukrywa tajemnicze zniknięcia podróżnych',
    'Mroczny las jest pełen zombie – nikt nie odważy się tam wejść',
    'Młyn zostaje otoczony przez nieumarłych – mechanizm działa bez przerwy',
    'Horda przemieszcza się przez otwarte pola – brak schronienia',
  ];
  name = 'countryside';
}
