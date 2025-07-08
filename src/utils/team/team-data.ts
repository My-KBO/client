import { TeamName } from './team-name-map';

export const TEAM_DATA: Record<
  TeamName,
  {
    key: string;
    name: string;
    sloganImage: string;
    emblemImage: string;
    description: string;
  }
> = {
  KIA: {
    key: 'KIA',
    name: 'KIA 타이거즈',
    sloganImage: require('../../assets/images/TeamSlogan/kia-tigers-slogan.png'),
    emblemImage: require('../../assets/images/TeamEmblem/kia-tigers-emblem.png'),
    description: '최다 우승 기록을 자랑하는 전통의 강팀.',
  },
  LG: {
    key: 'LG',
    name: 'LG 트윈스',
    sloganImage: require('../../assets/images/TeamSlogan/lg-twins-slogan.png'),
    emblemImage: require('../../assets/images/TeamEmblem/lg-twins-emblem.jpg'),
    description: '전통과 인기 모두를 겸비한 서울의 자존심.',
  },
  삼성: {
    key: '삼성',
    name: '삼성 라이온즈',
    sloganImage: require('../../assets/images/TeamSlogan/samsung-lions-slogan.jpg'),
    emblemImage: require('../../assets/images/TeamEmblem/samsung-lions-emblem.png'),
    description: '왕조 시절의 영광과 탄탄한 시스템을 자랑하는 구단.',
  },
  두산: {
    key: '두산',
    name: '두산 베어스',
    sloganImage: require('../../assets/images/TeamSlogan/doosan-bears-slogan.png'),
    emblemImage: require('../../assets/images/TeamEmblem/doosan-bears-emblem.png'),
    description: '꾸준한 저력과 끈끈한 조직력의 명문 구단.',
  },
  KT: {
    key: 'KT',
    name: 'KT 위즈',
    sloganImage: require('../../assets/images/TeamSlogan/kt-wiz-slogan.jpg'),
    emblemImage: require('../../assets/images/TeamEmblem/kt-wiz-emblem.jpg'),
    description: '빠르게 성장한 신흥 강호, 젊고 역동적인 에너지.',
  },
  SSG: {
    key: 'SSG',
    name: 'SSG 랜더스',
    sloganImage: require('../../assets/images/TeamSlogan/ssg-landers-slogan.jpg'),
    emblemImage: require('../../assets/images/TeamEmblem/ssg-landers-emblem.png'),
    description: '화끈한 공격력과 혁신적인 마케팅의 선두주자.',
  },
  롯데: {
    key: '롯데',
    name: '롯데 자이언츠',
    sloganImage: require('../../assets/images/TeamSlogan/lotte-giants-slogan.png'),
    emblemImage: require('../../assets/images/TeamEmblem/lotte-giants-emblem.jpg'),
    description: '열정적인 팬심과 화끈한 야구의 상징.',
  },
  한화: {
    key: '한화',
    name: '한화 이글스',
    sloganImage: require('../../assets/images/TeamSlogan/hanwha-eagles-slogan.png'),
    emblemImage: require('../../assets/images/TeamEmblem/hanwha-eagles-emblem.png'),
    description: '열정적인 팬과 함께 희로애락을 견뎌온 인내와 충성의 상징',
  },
  NC: {
    key: 'NC',
    name: 'NC 다이노스',
    sloganImage: require('../../assets/images/TeamSlogan/nc-dinos-slogan.jpg'),
    emblemImage: require('../../assets/images/TeamEmblem/nc-dinos-emblem.png'),
    description: '과학적 접근과 강력한 전력으로 도전하는 팀.',
  },
  키움: {
    key: '키움',
    name: '키움 히어로즈',
    sloganImage: require('../../assets/images/TeamSlogan/kiwoom-heroes-slogan.png'),
    emblemImage: require('../../assets/images/TeamEmblem/kiwoom-heroes-emblem.png'),
    description: '육성과 데이터야구로 승부하는 실리의 팀.',
  },
};
