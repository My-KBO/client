import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: 'password' | 'nickname' | 'team' | 'logout' ) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const tabClass = (tab: string) =>
    `w-full text-center py-3 text-lg cursor-pointer ${
      activeTab === tab ? 'font-semibold text-[#002561]' : 'text-gray-600'
    }`;

  return (
    <aside className="w-[240px] flex flex-col gap-2">
      <div className="text-2xl font-bold text-center py-3">마이페이지</div>
      <div className={tabClass('nickname')} onClick={() => setActiveTab('nickname')}>
        닉네임 변경
      </div>
      <div className={tabClass('password')} onClick={() => setActiveTab('password')}>
        비밀번호 변경
      </div>
      <div className={tabClass('password')} onClick={() => setActiveTab('team')}>
        좋아하는 팀 변경
      </div>
      <div className={tabClass('password')} onClick={() => setActiveTab('logout')}>
        로그아웃
      </div>
    </aside>
  );
};

export default Sidebar;
