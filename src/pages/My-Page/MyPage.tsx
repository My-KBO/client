import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/store';
import api from '../../services/axios';

import Password from './PasswordChange';
import Nickname from './NicknameChange';
import Team from './TeamChange';

type Tab = 'password' | 'nickname' | 'team';

const MyPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('nickname');
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const setAccessToken = useUserStore((state) => state.setAccessToken);

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      setUser(null);
      setAccessToken(null);
      alert('로그아웃 되었습니다');
      navigate('/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  const tabComponents: Record<Tab, () => React.ReactNode> = {
    password: () => <Password />,
    nickname: () => <Nickname />,
    team: () => <Team />,
  };

  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="w-full h-full bg-white flex flex-col items-center">
      <section className="w-full bg-[#002561] py-10 text-white flex justify-center items-center gap-10">
        <div className="w-[100px] h-[100px] rounded-full bg-gray-300" />
        <div>
          <h2 className="text-2xl font-bold mb-2">내 정보 관리</h2>
        </div>
      </section>

      {/* 사이드 바 */}
      <div className="flex w-full max-w-[1440px] mt-10 px-10 gap-6">
        <aside className="w-[240px] flex flex-col gap-2">
          <div className="text-2xl font-bold text-center py-3">마이페이지</div>
          <div className={tabClass('nickname')} onClick={() => setActiveTab('nickname')}>
            닉네임 변경
          </div>
          <div className={tabClass('password')} onClick={() => setActiveTab('password')}>
            비밀번호 변경
          </div>
          <div className={tabClass('team')} onClick={() => setActiveTab('team')}>
            좋아하는 팀 변경
          </div>
          <div
            className="text-center py-3 text-lg cursor-pointer text-gray-600"
            onClick={handleLogout}
          > 로그아웃
          </div>
        </aside>

        {/* 탭별 내용 실행 */}
        <main className="flex-1">
          {ActiveComponent ()}
        </main>
      </div>
    </div>
  );

  function tabClass(tab: Tab) {
    return `w-full text-center py-3 text-lg cursor-pointer ${
      activeTab === tab ? 'font-semibold text-[#002561]' : 'text-gray-600'
    }`;
  }
};

export default MyPage;

