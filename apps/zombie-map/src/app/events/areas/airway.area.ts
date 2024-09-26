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
    'Lotnisko zostało odcięte od świata – Zainfekowani pojawili się na pasach startowych',
    'Próbowaliście schronić się w hangarze, ale okazało się, że wewnątrz są Zainfekowani',
    'Samolot ewakuacyjny nie mógł wystartować, bo paliwo było na wyczerpaniu',
    'Wieża kontrolna przestała odpowiadać – komunikacja z miastem została zerwana',
    'Zainfekowani opanowali lotniskowy terminal, zmuszając was do ucieczki na pas startowy',
    'Parking lotniskowy został opanowany przez hordę – nie mieliście jak uciec',
    'Znalazł się samolot pełen zapasów, ale inni ocalałych również chcieli się do niego dostać',
    'Pasażerowie w terminalu zaczęli wpadać w panikę – Zainfekowani wdarli się do strefy odlotów',
    'Na lotnisku odnaleźliście jedyny działający samolot, ale piloci zostali zarażeni',
];
  name = 'airway';
}
