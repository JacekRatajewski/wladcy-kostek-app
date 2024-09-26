import { Area } from '../area.enum';
import { BaseArea } from './base.area';

export class TrainArea implements BaseArea {
  areas = [
    Area.Railway,
    Area.RailwayDashline,
    Area.RailwayMinor,
    Area.RailwayMinorDashline,
    Area.RailwayTransit,
    Area.RailwayTransitDashline,
  ];
  events = [
    'Metro było pełne Zainfekowanych, ale to jedyna droga do przodu – musieliście podjąć ryzyko',
    'Wasz pociąg zatrzymał się nagle na opuszczonej stacji – Zainfekowani zaczynają zbliżać się przez tunel',
    'Na peronie zobaczyliście grupę ocalałych, ale Zainfekowani byli już blisko – musieliście szybko decydować o dalszym kroku',
    'Zainfekowani przedostali się do pociągu, musieliście znaleźć wyjście przez okna zanim zostaliście złapani',
    'Pociąg stanął na torach – Zainfekowani opanowali wagon obok i zbliżali się w waszym kierunku',
    'Nieczynne linie kolejowe zmusiły was do podróży pieszo przez tunele, ale usłyszeliście echo nadchodzącej hordy',
    'Na stacji kolejowej znaleźliście opustoszały skład pełen zapasów, ale inni ocalałych też go zauważyli',
    'Przedzierając się przez tory, natrafiliście na Zainfekowanych ukrywających się w pociągu towarowym',
    'W podziemnym tunelu metra doszło do zawalenia, zmuszając was do znalezienia alternatywnej drogi ewakuacji',
  ];
  name = 'train';
}
