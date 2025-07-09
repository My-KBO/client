import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/axios';
import { useUserStore } from '../../store/store';

const teamOptions = [
  'LG 트윈스', '두산 베어스', 'SSG 랜더스', 'KT wiz', 'NC 다이노스', 'KIA 타이거즈', '롯데 자이언츠', '삼성 라이온즈', '한화 이글스', '키움 히어로즈',
];

const TeamChange = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const accessToken = useUserStore((state) => state.accessToken);
  const setUser = useUserStore((state) => state.setUser);

  const [newFavoriteTeam, setNewFavoriteTeam] = useState('');
  const handleTeamChange = async () => {
    if (!newFavoriteTeam.trim()) {
      alert('변경할 팀을 선택해주세요.');
      return;
    }

    try {
      await api.patch(
        'users/profile/team',
        { newFavoriteTeam },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (user) {
        setUser({ ...user, favoriteTeam : newFavoriteTeam });
      }

      alert('좋아하는 팀이 변경되었습니다.');
      navigate('/');
    } catch (error: any) {
      console.error('팀 변경 실패:', error);
      alert(error?.response?.data?.message || '좋아하는 팀 변경에 실패했습니다.');
    }
  };

  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col gap-12">
      <h2 className="text-[40px] font-bold text-center">좋아하는 팀 수정</h2>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">현재 응원하는 팀</label>
          <input
            type="text"
            value={user?.favoriteTeam || ''}
            disabled
            className="border border-gray-300 rounded px-3 py-2 w-full bg-gray-100 text-gray-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium"> 새로 이적할 팀 </label>
          <select
            value={newFavoriteTeam}
            onChange={(e) => setNewFavoriteTeam(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="" disabled hidden>
              선택하세요
            </option>
            {teamOptions.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-4 justify-center mt-6 mb-24">
        <button
          className="w-[240px] h-12 border border-[#002561] rounded text-black"
          onClick={() => navigate(-1)}
        >
          취소
        </button>
        <button
          className="w-[240px] h-12 bg-[#002561] text-white rounded"
          onClick={handleTeamChange}
        >
          저장하기
        </button>
      </div>
    </div>
  );
};

export default TeamChange;
