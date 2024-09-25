import { Area } from '../area.enum';
import { BaseArea } from './base.area';

export class AirWayArea implements BaseArea {
  areas = [
    Area.AerowayTaxiway,
    Area.AerowayRunwayCasing,
    Area.AerowayRunway,
    Area.AerowayArea,
  ];
  events = [
    'Lotnisko zostaje odcięte od świata – zombie na pasach startowych',
    'Samolot pełen zombie ląduje awaryjnie',
    'Horda atakuje terminal, pasażerowie uciekają w panice',
    'Pilot zostaje zarażony w trakcie lotu – samolot nie ma kapitana',
    'Schronienie w hangarze okazuje się pułapką',
    'Zombie wychodzą z bagażników na lotnisku',
    'Samolot ewakuacyjny zostaje zaatakowany podczas startu',
    'Wieża kontrolna milknie – nikt nie ma kontaktu z miastem',
    'Zombie opanowują lotniskowy parking, wszyscy są uwięzieni',
    'Paliwo do samolotów wyczerpane – brak możliwości ewakuacji',
  ];
  name = 'airway';
}
