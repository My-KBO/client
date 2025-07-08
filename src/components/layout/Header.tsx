import React from 'react';
import { Button } from '../common/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../stores/store';

function Header() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  
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
            <Link to="/board" className="text-gray-900">
              커뮤니티
            </Link>


            {user ? (
              <Button
                variant="primary-outlined"
                onClick={() => navigate('/mypage')}
              >
                마이페이지
              </Button>
            ) : (
              <Button
                variant="primary-outlined"
                onClick={() => navigate('/login')}
              >
                로그인
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
