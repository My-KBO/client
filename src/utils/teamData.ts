import { TeamName } from './teamNameMap';

export const TEAM_DATA: Record<
  TeamName,
  {
    name: string;
    // sloganImage: string;
    emblemImage: string;
    description: string;
  }
> = {
  KIA: {
    name: 'KIA Tigers',
    // sloganImage: require('../assets/images/TeamSlogan/kia-tigers-slogan.jpg'),
    emblemImage: require('../assets/images/TeamEmblem/kia-tigers-emblem.png'),
    description: '기아 타이거즈는 KBO 리그의 자랑스러운 프로야구 팀입니다.',
  },
  LG: {
    name: 'LG Twins',
    // sloganImage: require('../assets/images/TeamSlogan/lg-twins-slogan.jpg'),
    emblemImage: require('../assets/images/TeamEmblem/lg-twins-emblem.jpg'),
    description: '엘지 트윈스는 KBO 리그의 자랑스러운 프로야구 팀입니다.',
  },
  삼성: {
    name: 'Samsung Lions',
    // sloganImage: require('../assets/images/TeamSlogan/samsung-lions-slogan.jpg'),
    emblemImage: require('../assets/images/TeamEmblem/samsung-lions-emblem.png'),
    description:
      '삼성 라이온즈는 대구를 연고로 하는 KBO 리그의 명문 구단입니다.',
  },
  두산: {
    name: 'Doosan Bears',
    // sloganImage: require('../assets/images/TeamSlogan/doosan-bears-slogan.jpg'),
    emblemImage: require('../assets/images/TeamEmblem/doosan-bears-emblem.png'),
    description: '두산 베어스는 서울을 연고로 하는 전통의 강호입니다.',
  },
  KT: {
    name: 'KT Wiz',
    // sloganImage: require('../assets/images/TeamSlogan/kt-wiz-slogan.jpg'),
    emblemImage: require('../assets/images/TeamEmblem/kt-wiz-emblem.jpg'),
    description: 'KT 위즈는 수원을 연고로 하는 젊고 강한 신흥 강자입니다.',
  },
  SSG: {
    name: 'SSG Landers',
    // sloganImage: require('../assets/images/TeamSlogan/ssg-landers-slogan.jpg'),
    emblemImage: require('../assets/images/TeamEmblem/ssg-landers-emblem.png'),
    description:
      'SSG 랜더스는 인천을 연고로 한 야구단으로, 팬들의 사랑을 받고 있습니다.',
  },
  롯데: {
    name: 'Lotte Giants',
    // sloganImage: require('../assets/images/TeamSlogan/lotte-giants-slogan.jpg'),
    emblemImage: require('../assets/images/TeamEmblem/lotte-giants-emblem.jpg'),
    description: '롯데 자이언츠는 부산을 대표하는 인기 야구 팀입니다.',
  },
  한화: {
    name: 'Hanwha Eagles',
    // sloganImage: require('../assets/images/TeamSlogan/hanwha-eagles-slogan.jpg'),
    emblemImage: require('../assets/images/TeamEmblem/hanwha-eagles-emblem.png'),
    description: '한화 이글스는 대전을 연고로 하는 열정적인 팀입니다.',
  },
  NC: {
    name: 'NC Dinos',
    // sloganImage: require('../assets/images/TeamSlogan/nc-dinos-slogan.jpg'),
    emblemImage: require('../assets/images/TeamEmblem/nc-dinos-emblem.png'),
    description: 'NC 다이노스는 창원을 연고로 하는 젊은 팀입니다.',
  },
  키움: {
    name: 'Kiwoom Heroes',
    // sloganImage: require('../assets/images/TeamSlogan/kiwoom-heroes-slogan.jpg'),
    emblemImage: require('../assets/images/TeamEmblem/kiwoom-heroes-emblem.png'),
    description: '키움 히어로즈는 고척돔을 홈으로 사용하는 KBO 리그 팀입니다.',
  },
};
