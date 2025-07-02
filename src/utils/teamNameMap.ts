export type TeamName =
  | 'KIA'
  | 'LG'
  | '삼성'
  | '두산'
  | 'KT'
  | 'SSG'
  | '롯데'
  | '한화'
  | 'NC'
  | '키움';

export const teamKeyMap: Record<string, TeamName> = {
  kiatigers: 'KIA',
  lgtwins: 'LG',
  samsunglions: '삼성',
  doosanbears: '두산',
  ktwiz: 'KT',
  ssglanders: 'SSG',
  lottegiants: '롯데',
  hanwhaeagles: '한화',
  ncdinos: 'NC',
  kiwoomheroes: '키움',
};

export const teamDisplayNameMap: Record<TeamName, string> = {
  KIA: '타이거즈',
  LG: '트윈스',
  삼성: '라이온즈',
  두산: '베어스',
  KT: '위즈',
  SSG: '랜더스',
  롯데: '자이언츠',
  한화: '이글스',
  NC: '다이노스',
  키움: '히어로즈',
};
