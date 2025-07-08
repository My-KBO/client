import React, { useState } from 'react';
import Sidebar from './Sidetab';
import PasswordChange from './PasswordChange';
// import NicknameChange from './NicknameChange'; // 다른 탭 있을 시

type Tab = 'password' | 'nickname' | 'team' | 'logout'; // 추가 가능

const MyPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('password');

  const renderContent = () => {
    switch (activeTab) {
      case 'password':
        return <PasswordChange />;
      // case 'nickname':
      //   return <NicknameChange />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full bg-white flex flex-col items-center">

      {/* 상단 섹션 */}
      <section className="w-full bg-[#002561] py-10 text-white flex justify-center items-center gap-10">
        <div className="w-[100px] h-[100px] rounded-full bg-gray-300" />
        <div>
          <h2 className="text-2xl font-bold mb-2">내 정보 관리</h2>
          {/* <div className="flex gap-2">
            <span className="text-sm bg-white/50 text-black px-2 py-1 rounded">회원</span>
            <p className="text-sm">비밀번호를 변경할 수 있어요.</p>
          </div> */}
        </div>
      </section>
이
      {/* 본문 */}
      <div className="flex w-full max-w-[1440px] mt-10 px-10 gap-6">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1">{renderContent()}</main>
      </div>
    </div>
  );
};

export default MyPage;
