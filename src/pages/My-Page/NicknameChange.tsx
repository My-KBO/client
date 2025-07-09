import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/axios';
import { useUserStore } from '../../stores/store';

const NicknameChange = () => {
  const [nickname, setNickname] = useState('');
  const [newNickname, setNewNickname] = useState('');
  const navigate = useNavigate();

  const token = useUserStore.getState().accessToken;

  // 현재 닉네임 불러오기
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get('/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log('내 정보:', res.data);

        setNickname(res.data.nickname);
      } catch (error: any) {
        console.error('프로필 조회 실패:', error);
        alert('현재 닉네임을 불러오지 못했습니다.');
      }
    };

    fetchProfile();
  }, [token]);

  const handleNicknameChange = async () => {
    if (!newNickname.trim()) {
      alert('새 닉네임을 입력해주세요.');
      return;
    }

    try {
      await api.patch(
        '/users/profile/nickname',
        { newNickname },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('닉네임이 변경되었습니다.');
      navigate('/');
    } catch (error: any) {
      console.error('닉네임 변경 실패:', error);
      alert(error?.response?.data?.message || '닉네임 변경에 실패했습니다.');
    }
  };

  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col gap-12">
      <h2 className="text-[40px] font-bold text-center">닉네임 수정</h2>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">현재 닉네임</label>
          <input
            type="text"
            value={nickname}
            disabled
            className="border border-gray-300 rounded px-3 py-2 w-full bg-gray-100 text-gray-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">새 닉네임</label>
          <input
            type="text"
            value={newNickname}
            onChange={(e) => setNewNickname(e.target.value)}
            placeholder="새 닉네임 입력"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
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
          onClick={handleNicknameChange}
        >
          저장하기
        </button>
      </div>
    </div>
  );
};

export default NicknameChange;
