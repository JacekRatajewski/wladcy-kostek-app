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
    'Zombie wdzierają się do pociągu w trakcie jazdy',
    'Stacja kolejowa zamienia się w pole walki',
    'Pociąg wykoleja się po zderzeniu z zombie',
    'Zombifikowany maszynista przestaje reagować na polecenia',
    'Tunel kolejowy staje się pułapką – zombie wszędzie dookoła',
    'Ewakuacyjny pociąg przepełniony uchodźcami zostaje zaatakowany',
    'Zombie blokują tory kolejowe, unieruchamiając pociąg',
    'Nagle zatrzymany pociąg wywołuje panikę wśród pasażerów',
    'Zardzewiałe wagony towarowe pełne ciał zombie z przeszłości',
    'Most kolejowy zawala się pod naporem żywych trupów',
  ];
  name = 'train';
}
