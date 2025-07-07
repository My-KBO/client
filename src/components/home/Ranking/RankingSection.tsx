import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  fetchTeamRankings,
  TeamRanking,
  fetchTopPlayers,
  TopPlayerResponse,
  PlayerRankingItem,
} from '../../../services/baseballAPI';

const RankingSection = () => {
  const [activeTab, setActiveTab] = useState<'batter' | 'pitcher'>('batter');

  // 팀 순위 데이터 패칭
  const {
    data: teamRankingData = [],
    isLoading,
    error: teamError,
  } = useQuery({
    queryKey: ['teamRankings'],
    queryFn: fetchTeamRankings,
  });

  // 선수 랭킹 데이터 패칭
  const {
    data: topPlayerData,
    isLoading: isPlayerLoading,
    error: playerError,
  } = useQuery({
    queryKey: ['topPlayers'],
    queryFn: fetchTopPlayers,
  });

  const currentPlayerData: PlayerRankingItem[] =
    activeTab === 'batter'
      ? (topPlayerData?.hitter ?? [])
      : (topPlayerData?.pitcher ?? []);

  return (
    <section className="w-full flex justify-center py-[60px] bg-white">
      <div className="w-full max-w-7xl px-8 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* TEAM RANKING */}
        <div className="flex-1 bg-white rounded-lg p-6 flex flex-col justify-between items-center min-w-[400px] max-w-[600px] min-h-[500px] max-h-[700px]">
          <h2 className="text-2xl font-bold mb-4">TEAM RANKING</h2>
          {isLoading ? (
            <div className="text-gray-400">로딩 중...</div>
          ) : teamError ? (
            <div className="text-red-500">
              팀 순위를 불러오는데 실패했습니다.
            </div>
          ) : (
            <div className="w-full overflow-auto">
              <table className="w-full text-center border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-1 border">순위</th>
                    <th className="p-1 border">팀</th>
                    <th className="p-1 border">경기</th>
                    <th className="p-1 border">승</th>
                    <th className="p-1 border">패</th>
                    <th className="p-1 border">무</th>
                    <th className="p-1 border">승률</th>
                    <th className="p-1 border">게임차</th>
                    <th className="p-1 border">연속</th>
                  </tr>
                </thead>
                <tbody>
                  {teamRankingData.map((team: TeamRanking) => (
                    <tr key={team.rank}>
                      <td className="border p-1">{team.rank}</td>
                      <td className="border p-1">{team.team}</td>
                      <td className="border p-1">{team.games}</td>
                      <td className="border p-1">{team.win}</td>
                      <td className="border p-1">{team.lose}</td>
                      <td className="border p-1">{team.draw}</td>
                      <td className="border p-1">{team.winRate}</td>
                      <td className="border p-1">{team.gameGap}</td>
                      <td className="border p-1">{team.streak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="text-gray-400 text-xs mt-2 self-">25.05.26 기준</div>
        </div>
        {/* PLAYER RANKING */}
        <div className="flex-1 bg-white rounded-lg p-6 flex flex-col items-center justify-between min-w-[400px] max-w-[600px] min-h-[500px] max-h-[700px]">
          <h2 className="text-2xl font-bold mb-4">PLAYER RANKING</h2>
          <div className="w-full flex border-b mb-6">
            <button
              className={`w-full px-6 py-2 font-medium border-b-4 transition-colors ${
                activeTab === 'batter'
                  ? 'border-blue-900 text-blue-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
              onClick={() => setActiveTab('batter')}
            >
              타자
            </button>
            <button
              className={`w-full px-6 py-2 font-medium border-b-4 transition-colors ${
                activeTab === 'pitcher'
                  ? 'border-blue-900 text-blue-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
              onClick={() => setActiveTab('pitcher')}
            >
              투수
            </button>
          </div>
          <div className="w-full h-full flex flex-col justify-between overflow-auto">
            {isPlayerLoading ? (
              <div className="text-gray-400">로딩 중...</div>
            ) : playerError ? (
              <div className="text-red-500">
                선수 랭킹을 불러오는데 실패했습니다.
              </div>
            ) : (
              currentPlayerData.map((player, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex px-6 py-6 gap-6 justify-start items-center">
                    {/* 카테고리 */}
                    <div className="w-24 text-xl font-semibold text-blue-900 text-left">
                      {player.category}
                    </div>
                    <div className="flex items-center gap-6">
                      {/*<div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0" />*/}
                      {/* 팀/이름/정보 */}
                      <div className="flex flex-col flex-1 items-start ">
                        <div className="flex items-center mb-1">
                          <span className="text-xs bg-gray-100 text-gray-900 rounded px-2 py-0.5 mr-2">
                            {player.team}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold text-gray-900 text-lg">
                            {player.name}
                          </span>
                          <span className="text-sm text-gray-900 px-2 ">
                            {player.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {idx !== currentPlayerData.length - 1 && (
                    <div className="w-full mx-auto border-b border-gray-200" />
                  )}
                </React.Fragment>
              ))
            )}
          </div>
          <div className="text-gray-400 text-xs mt-8 self-center">기준</div>
        </div>
      </div>
    </section>
  );
};

export default RankingSection;
