import { TeamKey } from './teamKeyMap';

export const TEAM_DATA: Record<
  TeamKey,
  {
    name: string;
    sloganImage: string;
    logoImage: string;
    description: string;
  }
> = {
  kia: {
    name: 'KIA Tigers',
    sloganImage: require('../assets/images/TeamSlogan/kia-tigers-slogan.jpg'),
    logoImage: require('../assets/images/TeamEmblem/kia-tigers-emblem.png'),
    description: '기아 타이거즈는 KBO 리그의 자랑스러운 프로야구 팀입니다.',
  },
  lg: {
    name: 'LG Twins',
    sloganImage: require('../assets/images/TeamSlogan/lg-twins-slogan.jpg'),
    logoImage: require('../assets/images/TeamEmblem/lg-twins-emblem.jpg'),
    description: '엘지 트윈스는 KBO 리그의 자랑스러운 프로야구 팀입니다.',
  },
  // 다른 팀들도 추가 예정
};
