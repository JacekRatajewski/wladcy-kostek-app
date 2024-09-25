import { Area } from '../area.enum';
import { BaseArea } from './base.area';

export class RoadArea implements BaseArea {
  areas = [
    Area.HighwayPath,
    Area.HighwayMinor,
    Area.HighwayMajorCasing,
    Area.HighwayMajorInner,
    Area.HighwayMajorSubtle,
    Area.HighwayMotorwayCasing,
    Area.HighwayMotorwayInner,
    Area.HighwayMotorwaySubtle,
    Area.HighwayNameOther,
    Area.HighwayNameMotorway,
  ];
  events = [
    'Ogromny korek blokuje ucieczkę',
    'Zombie pojawiają się w tunelu, nie ma wyjścia',
    'Autostrada staje się śmiertelną pułapką – każdy samochód zostaje zaatakowany',
    'Kolizja konwoju wojskowego z hordą',
    'Most drogowy jest zniszczony – przejście dalej niemożliwe',
    'Zombifikowani kierowcy ciężarówek taranują innych',
    'Blokada dróg przez barykady pełne uchodźców',
    'Podpalone wraki samochodów blokują trasę ucieczki',
    'Horda wstrzymuje ruch na autostradzie, blokując możliwość ucieczki',
    'Ostatnia stacja benzynowa jest oblegana przez zdesperowanych ocalałych'
  ];
  name = 'raod';
}
