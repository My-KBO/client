import React, { useState } from 'react';
import teamRankingData from './team-ranking-data';
import {
  batterRankingData,
  pitcherRankingData,
  PlayerRankingData,
} from './player-ranking-data';

const RankingSection = () => {
  const [activeTab, setActiveTab] = useState<'batter' | 'pitcher'>('batter');

  const currentData =
    activeTab === 'batter' ? batterRankingData : pitcherRankingData;

  return (
    <section className="w-full flex justify-center py-15 px-[170px] py-[60px] bg-white">
      <div className="w-4/5 flex flex-col md:flex-row gap-40">
        {/* TEAM RANKING */}
        <div className="flex-1 bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">TEAM RANKING</h2>
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
              {teamRankingData.map((team) => (
                <tr key={team.rank}>
                  <td className="border p-1">{team.rank}</td>
                  <td className="border p-1">{team.team}</td>
                  <td className="border p-1">{team.games}</td>
                  <td className="border p-1">{team.win}</td>
                  <td className="border p-1">{team.lose}</td>
                  <td className="border p-1">{team.draw}</td>
                  <td className="border p-1">{team.winRate}</td>
                  <td className="border p-1">{team.diff}</td>
                  <td className="border p-1">{team.streak}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-gray-400 text-xs mt-2">25.05.26 기준</div>
        </div>
        {/* PLAYER RANKING */}
        <div className="flex-1 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">PLAYER RANKING</h2>
          <div className="w-full flex border-b mb-6">
            <button
              className={`px-6 py-2 font-medium border-b-4 transition-colors ${
                activeTab === 'batter'
                  ? 'border-blue-900 text-blue-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
              onClick={() => setActiveTab('batter')}
            >
              타자
            </button>
            <button
              className={`px-6 py-2 font-medium border-b-4 transition-colors ${
                activeTab === 'pitcher'
                  ? 'border-blue-900 text-blue-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
              onClick={() => setActiveTab('pitcher')}
            >
              투수
            </button>
          </div>
          <div className="w-full h-full flex flex-col justify-between">
            {currentData.map((player: PlayerRankingData, idx: number) => (
              <React.Fragment key={idx}>
                <div className="flex items-center py-6 gap-6 ">
                  {/* 카테고리 */}
                  <div className="flex-1 text-lg font-semibold text-blue-900 text-left">
                    {player.category}
                  </div>
                  {/* 원형 이미지 */}
                  {player.image ? (
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0" />
                  )}
                  {/* 팀/이름/정보 */}
                  <div className="flex flex-col flex-1 items-start ">
                    <div className="flex items-center mb-1">
                      <span className="text-xs bg-gray-100 text-gray-500 rounded px-2 py-0.5 mr-2">
                        {player.team}
                      </span>
                      <span className="font-bold text-base text-gray-900">
                        {player.name}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 ml-1">
                      {player.info}
                    </div>
                  </div>
                </div>
                {idx !== currentData.length - 1 && (
                  <div className="w-full mx-auto border-b border-gray-200" />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="text-gray-400 text-xs mt-8 self-end">
            25.05.26 기준
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingSection;
