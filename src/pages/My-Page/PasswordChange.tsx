import React, { useState } from 'react';
import api from '../../services/axios'; // Axios 인스턴스 (token 포함되어야 함)
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/store';

const PasswordChange = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      alert('새 비밀번호와 확인이 일치하지 않습니다.');
      return;
    }

    try {
      const token = useUserStore.getState().accessToken;

      await api.patch('/users/profile/password', 
      {
        currentPassword :currentPassword,
        newPassword : newPassword,
      },
      {
        headers : {
          Authorization : `Bearer ${token}`,
        },
      });

      alert('비밀번호가 성공적으로 변경되었습니다.');
      navigate('/'); 
    } catch (error: any) {
      console.error('비밀번호 변경 실패:', error);
      alert(error?.response?.data?.message || '비밀번호 변경에 실패했습니다.');
    }
  };

  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col gap-12">
      <h2 className="text-[40px] font-bold text-center">비밀번호 수정</h2>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">현재 비밀번호</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="현재 비밀번호 입력"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">새 비밀번호</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="새 비밀번호 입력"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">비밀번호 확인</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="비밀번호 확인 입력"
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
          onClick={handlePasswordChange}
        >
          저장하기
        </button>
      </div>
    </div>
  );
};

export default PasswordChange;
