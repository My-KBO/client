import api from './api';
import { tempTodayGames } from './tempDummyData';

export interface TeamRanking {
  rank: number;
  team: string;
  games: number;
  win: number;
  lose: number;
  draw: number;
  winRate: number;
  gameGap: string;
  streak: string;
}

export interface PlayerRankingItem {
  category: string;
  name: string;
  team: string;
  value: string;
}

export interface TopPlayerResponse {
  hitter: PlayerRankingItem[];
  pitcher: PlayerRankingItem[];
}

export interface TodayGame {
  id: number;
  date: string;
  time: string;
  homeTeam: string;
  homeScore: string;
  awayTeam: string;
  awayScore: string;
  stadium: string;
  note: string;
  weather: string;
}

export const fetchTeamRankings = async (): Promise<TeamRanking[]> => {
  try {
    console.log('팀 순위 API 호출 중...');
    const res = await api.get<TeamRanking[]>('/baseball/rankings');
    console.log('팀 순위 API 응답:', res.data);
    return res.data;
  } catch (error) {
    console.error('팀 순위 API 호출 실패:', error);
    throw error;
  }
};

export const fetchTopPlayers = async (): Promise<TopPlayerResponse> => {
  try {
    console.log('선수 랭킹 API 호출 중...');
    const res = await api.get<TopPlayerResponse>('/baseball/topplayer');
    console.log('선수 랭킹 API 응답:', res.data);
    return res.data;
  } catch (error) {
    console.error('선수 랭킹 API 호출 실패:', error);
    throw error;
  }
};

export const fetchTodayGames = async (): Promise<TodayGame[]> => {
  try {
    console.log('오늘의 경기 API 호출 중...');
    const res = await api.get<TodayGame[]>('/baseball/games/today');
    console.log('오늘의 경기 API 응답:', res.data);
    return res.data;
  } catch (error) {
    console.error('오늘의 경기 API 호출 실패:', error);
    throw error;
  }
};
