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

export const teamNameToKey: Record<TeamName, string> = {
  KIA: 'kiatigers',
  LG: 'lgtwins',
  삼성: 'samsunglions',
  두산: 'doosanbears',
  KT: 'ktwiz',
  SSG: 'ssglanders',
  롯데: 'lottegiants',
  한화: 'hanwhaeagles',
  NC: 'ncdinos',
  키움: 'kiwoomheroes',
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

export const teamNameMap: Record<string, string> = {
  삼성: '삼성\n라이온즈',
  한화: '한화\n이글스',
  KIA: 'KIA\n타이거즈',
  LG: 'LG\n트윈스',
  두산: '두산\n베어스',
  롯데: '롯데\n자이언츠',
  키움: '키움\n히어로즈',
  KT: 'KT\n위즈',
  NC: 'NC\n다이노스',
  SSG: 'SSG\n랜더스',
};
