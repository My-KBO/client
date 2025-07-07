import kiaEmblem from '../assets/images/TeamEmblem/kia-tigers-emblem.png';
import lgEmblem from '../assets/images/TeamEmblem/lg-twins-emblem.jpg';
import ssgEmblem from '../assets/images/TeamEmblem/ssg-landers-emblem.png';
import doosanEmblem from '../assets/images/TeamEmblem/doosan-bears-emblem.png';
import samsungEmblem from '../assets/images/TeamEmblem/samsung-lions-emblem.png';
import hanwhaEmblem from '../assets/images/TeamEmblem/hanwha-eagles-emblem.png';
import lotteEmblem from '../assets/images/TeamEmblem/lotte-giants-emblem.jpg';
import ncEmblem from '../assets/images/TeamEmblem/nc-dinos-emblem.png';
import ktEmblem from '../assets/images/TeamEmblem/kt-wiz-emblem.jpg';
import kiwoomEmblem from '../assets/images/TeamEmblem/kiwoom-heroes-emblem.png';

import { TeamName } from './teamNameMap';

export const teamEmblemMap: Record<TeamName, string> = {
  KIA: kiaEmblem,
  LG: lgEmblem,
  SSG: ssgEmblem,
  두산: doosanEmblem,
  삼성: samsungEmblem,
  한화: hanwhaEmblem,
  롯데: lotteEmblem,
  NC: ncEmblem,
  KT: ktEmblem,
  키움: kiwoomEmblem,
};
