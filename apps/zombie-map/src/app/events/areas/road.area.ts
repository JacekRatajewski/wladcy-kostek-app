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
    'Wasz samochód utknął w korku – za wami Zainfekowani, a przed wami zablokowana droga',
    'Znaleźliście opuszczony bankowóz, który może zawierać cenne zasoby, ale inni ocalałych już się na niego czają',
    'Podjeżdżający autobus wpada w panikę i zderza się z innymi pojazdami – musicie szybko się ewakuować',
    'Pasażer w waszym pojeździe zaczyna wykazywać objawy infekcji – musicie podjąć trudną decyzję',
    'Kilka porzuconych samochodów blokuje drogę – próbujecie znaleźć sposób, aby się wydostać',
    'Kierowca samochodu osobowego wpada w szał, próbując rozjechać Zainfekowanych, ryzykując wasze życie',
    'Ulice miasta są zablokowane – musieliście przebić się przez boczne drogi pełne opuszczonych pojazdów',
    'Brak paliwa zmusił was do porzucenia auta i poszukiwania schronienia pieszo, podczas gdy Zainfekowani zbliżają się',
    'Tramwaje zostały opuszczone na środku ulic – musicie manewrować między nimi, unikać Zainfekowanych i szukać alternatywnej trasy',
];
  name = 'raod';
}
