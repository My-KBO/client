import React from 'react';
import { Button } from '../common/Button';

function Header() {
  return (
    <header className="bg-white">
      <nav className="container mx-auto px-5 py-5">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-medium text-gray-900">
            <a href="/">My KBO</a>
          </div>
          <div className="flex items-center gap-10 md:flex items-center ">
            <a href="/" className="text-gray-900">
              홈
            </a>
            <a href="/team-info" className="text-gray-900 ">
              팀 정보
            </a>
            <a href="/community" className="text-gray-900 ">
              커뮤니티
            </a>
            <Button variant="primary-outlined">로그인</Button>
            {/* <a href="/mypage" className="text-gray-900">
              마이페이지
            </a> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
