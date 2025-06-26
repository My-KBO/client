export type TeamKey = 'lg' | 'kia';

export const TEAM_DATA: Record<
  TeamKey,
  {
    name: string;
    sloganImage: string;
    logoImage: string;
    description: string;
  }
> = {
  lg: {
    name: 'LG Twins',
    sloganImage: require('../assets/images/lg-twins-slogan.jpg'),
    logoImage: require('../assets/images/엘지 트윈스 로고.jpg'),
    description: '엘지 트윈스는 KBO 리그의 자랑스러운 프로야구 팀입니다.',
  },
  kia: {
    name: 'KIA Tigers',
    sloganImage: require('../assets/images/기아 타이거즈 슬로건.jpg'),
    logoImage: require('../assets/images/기아 타이거즈 로고.png'),
    description: '기아 타이거즈는 KBO 리그의 자랑스러운 프로야구 팀입니다.',
  },
  // 다른 팀들도 추가 예정
};
