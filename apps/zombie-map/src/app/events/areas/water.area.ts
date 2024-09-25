import { Area } from '../area.enum';
import { BaseArea } from './base.area';

export class WaterArea implements BaseArea {
  areas = [Area.Water, Area.Waterway, Area.WaterName];
  events = [
    'Zombifikowana fala uderza w brzeg',
    'Zatopiony statek pełen zombie dryfuje ku miastu',
    'Zakażenie rozprzestrzenia się przez miejskie zbiorniki wodne',
    'Zombie wychodzą z bagna, gotowe do ataku',
    'Łodzie ratunkowe pełne uchodźców zostają zaatakowane',
    'Zatrute wodociągi powodują choroby w schronie',
    'Fala tsunami przynosi ciała zarażonych',
    'Mosty nad rzeką są zablokowane przez hordę zombie',
    'Kanały miejskie pełne zombie zalewają okoliczne dzielnice',
    'Zapory wodne zostają przerwane, niosąc za sobą hordy zombie',
  ];
  name = 'water';
}
