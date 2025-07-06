import React, { useEffect, useState } from 'react';
import MatchCard from './MatchCard';
import { Button } from '../../common/Button';
import { fetchTodayGames, TodayGame } from '../../../services/baseballAPI';

const MatchCardSection = () => {
  const [games, setGames] = useState<TodayGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTodayGames = async () => {
      try {
        setLoading(true);
        setError(null);
        const todayGames = await fetchTodayGames();
        // ID 순번대로 정렬
        const sortedGames = todayGames.sort((a, b) => a.id - b.id);
        setGames(sortedGames);
      } catch (err) {
        console.error('오늘의 경기 일정을 불러오는데 실패했습니다:', err);
        setError('경기 일정을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadTodayGames();
  }, []);

  // API 데이터를 MatchCard 컴포넌트에 맞는 형태로 변환
  const transformGameData = (game: TodayGame) => {
    return {
      homeTeam: game.homeTeam,
      awayTeam: game.awayTeam,
      homeScore: game.homeScore || undefined,
      awayScore: game.awayScore || undefined,
      date: game.date,
      time: game.time,
      stadium: game.stadium,
      note: game.note,
      weather: game.weather,
    };
  };

  if (loading) {
    return (
      <section className="w-full px-[170px] py-[60px] flex flex-col items-center gap-[60px]">
        <div className="w-full flex flex-col items-center mb-10">
          <h2 className="text-2xl text-gray-900 font-bold mb-4">
            오늘의 경기 일정
          </h2>
          <Button
            variant="primary-outlined"
            className="rounded-[8px] w-[240px]"
          >
            경기 전체 일정
          </Button>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-gray-600">경기 일정을 불러오는 중...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full px-[170px] py-[60px] flex flex-col items-center gap-[60px]">
        <div className="w-full flex flex-col items-center mb-10">
          <h2 className="text-2xl text-gray-900 font-bold mb-4">
            오늘의 경기 일정
          </h2>
          <Button
            variant="primary-outlined"
            className="rounded-[8px] w-[240px]"
          >
            경기 전체 일정
          </Button>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-red-600">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-[170px] py-[60px] flex flex-col items-center gap-[60px]">
      <div className="w-full flex flex-col items-center mb-10">
        <h2 className="text-2xl text-gray-900 font-bold mb-4">
          오늘의 경기 일정
        </h2>
        <Button variant="primary-outlined" className="rounded-[8px] w-[240px]">
          경기 전체 일정
        </Button>
      </div>
      {games.length === 0 ? (
        <div className="w-full flex justify-center">
          <div className="text-gray-600">오늘 예정된 경기가 없습니다.</div>
        </div>
      ) : (
        <div className="w-full flex flex-row justify-center gap-2 items-stretch">
          {games.map((game) => (
            <div className="flex-1 max-w-xs" key={game.id}>
              <MatchCard {...transformGameData(game)} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MatchCardSection;
