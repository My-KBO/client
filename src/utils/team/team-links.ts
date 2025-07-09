import { TeamName } from './team-name-map';

export const teamLinks: Record<
  TeamName,
  {
    official: string;
    shop: string;
    schedule: string;
    record: string;
    player: string;
    comment: string;
  }
> = {
  LG: {
    official: 'https://www.lgtwins.com',
    shop: 'https://twinslockerdium.co.kr/',
    schedule:
      'https://www.lgtwins.com/service/html.ncd?view=%2Fpc_twins%2Ftwins_game%2Ftwins_planner&baRq=IN_DS&IN_DS.GYEAR=&IN_DS.GMONTH=&baRs=OUT_DS%2COUT_TEAM&actID=BR_RetrieveGameSchedule',
    record:
      'https://www.lgtwins.com/service/html.ncd?view=%2Fpc_twins%2Ftwins_game%2Ftwins_planner&baRq=IN_DS&IN_DS.GYEAR=&IN_DS.GMONTH=&baRs=OUT_DS%2COUT_TEAM&actID=BR_RetrieveGameSchedule',
    player:
      'https://www.lgtwins.com/service/html.ncd?view=%2Fpc_twins%2Ftwins_game%2Ftwins_player_rank&baRq=IN_DS&IN_DS.GYEAR=&IN_DS.ORDER=ERA&IN_DS.ORDER2=HRA&baRs=OUT_HIT%2COUT_PIT&actID=BR_RetrievePlayerRank',
    comment: 'http://localhost:3000/category/LG',
  },
  KT: {
    official: 'https://www.ktwiz.co.kr',
    shop: 'https://www.ktwizstore.co.kr/mobile/main/mainView.do',
    schedule: 'https://www.ktwiz.co.kr/game/regular/schedule',
    record: 'https://www.ktwiz.co.kr/game/regular/schedule',
    player: 'https://www.ktwiz.co.kr/player/pitcher',
    comment: 'http://localhost:3000/category/KT',
  },
  KIA: {
    official: 'https://www.tigers.co.kr',
    shop: 'https://teamstore.tigers.co.kr/',
    schedule: 'https://tigers.co.kr/game/schedule/major/202507',
    record: 'https://tigers.co.kr/game/schedule/major/202507',
    player: 'https://tigers.co.kr/players/pitcher',
    comment: 'http://localhost:3000/category/KIA',
  },
  두산: {
    official: 'https://www.doosanbears.com',
    shop: 'https://doosanbearswefan.shop/',
    schedule: 'https://www.doosanbears.com/game/first',
    record: 'https://www.doosanbears.com/game/first',
    player: 'https://www.doosanbears.com/member/pitchers',
    comment: 'http://localhost:3000/category/DOOSAN',
  },
  삼성: {
    official: 'https://www.samsunglions.com/index.asp',
    shop: 'https://samsunglionsmall.com/',
    schedule: 'https://www.samsunglions.com/score/score_index.asp',
    record: 'https://www.samsunglions.com/score/score_index.asp',
    player: 'https://www.samsunglions.com/roster/roster_2_list.asp',
    comment: 'http://localhost:3000/category/SAMSUNG',
  },
  SSG: {
    official: 'https://www.ssglanders.com',
    shop: 'https://store.ssglanders.com/',
    schedule: 'https://www.ssglanders.com/game/schedule',
    record: 'https://www.ssglanders.com/game/schedule',
    player: 'https://www.ssglanders.com/players/list?position=pitcher',
    comment: 'http://localhost:3000/category/SSG',
  },
  한화: {
    official: 'https://www.hanwhaeagles.co.kr',
    shop: 'https://www.hanwhaeagles.co.kr/SH/PCSH01.do',
    schedule: 'https://www.hanwhaeagles.co.kr/GA/GE/PCFAGE01.do',
    record: 'https://www.hanwhaeagles.co.kr/GA/GE/PCFAGE01.do',
    player: 'https://www.hanwhaeagles.co.kr/PL/PC/PLPC01.do',
    comment: 'http://localhost:3000/category/HANHWA',
  },
  롯데: {
    official: 'https://www.giantsclub.com',
    shop: 'https://www.lotteon.com/p/display/seller/sellerShop/lottegiants?ch_no=101509&ch_dtl_no=1049592',
    schedule: 'https://www.giantsclub.com/html/?pcode=257',
    record: 'https://www.giantsclub.com/html/?pcode=257',
    player: 'https://www.giantsclub.com/html/?pcode=819',
    comment: 'http://localhost:3000/category/LOTTE',
  },
  NC: {
    official: 'https://www.ncdinos.com',
    shop: 'https://store.ncdinos.com/',
    schedule: 'https://www.ncdinos.com/game/majorSchedule.do',
    record: 'https://www.ncdinos.com/game/majorSchedule.do',
    player: 'https://www.ncdinos.com/player/pitcher/list.do',
    comment: 'http://localhost:3000/category/NC',
  },
  키움: {
    official: 'https://www.heroesbaseball.co.kr',
    shop: 'https://interparkmdshop.com/category/%ED%82%A4%EC%9B%80%ED%9E%88%EC%96%B4%EB%A1%9C%EC%A6%88/29/',
    schedule: 'https://heroesbaseball.co.kr/games/schedule/list1st.do',
    record: 'https://heroesbaseball.co.kr/games/schedule/list1st.do',
    player: 'https://heroesbaseball.co.kr/players/pitcher/list.do',
    comment: 'http://localhost:3000/category/KIWOOM',
  },
};
