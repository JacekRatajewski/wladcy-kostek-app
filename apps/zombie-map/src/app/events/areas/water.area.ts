import { Area } from '../area.enum';
import { BaseArea } from './base.area';

export class WaterArea implements BaseArea {
  areas = [Area.Water, Area.Waterway, Area.WaterName];
  events = [
    'Znaleźliście opuszczoną łódź na jeziorze, ale inna grupa ocalałych już się do niej zbliżała',
    'Most przez rzekę został zniszczony – musieliście znaleźć inną drogę ucieczki przed Zainfekowanymi',
    'Podczas próby przeprawy przez rzekę, wasza łódź została uszkodzona, a Zainfekowani byli coraz bliżej',
    'Port wydawał się bezpieczny, ale okazało się, że Zainfekowani ukrywali się w pobliskich magazynach',
    'Wędkarze, którzy przeżyli na rzece, odmówili wam pomocy, wierząc, że sprowadzicie na nich niebezpieczeństwo',
    'Zainfekowani przedostali się na most, blokując jedyną drogę wyjścia z wyspy',
    'Próbowaliście uciec przez kanał żeglugowy, ale woda była skażona, a Zainfekowani znajdowali się na obu brzegach',
    'Znaleźliście opustoszałą przystań, pełną łodzi, ale zabrakło wam paliwa do jednej z nich',
    'Most zwodzony został podniesiony – nie mogliście przedostać się na drugą stronę, zanim Zainfekowani was dogonili',
  ];
  name = 'water';
}
