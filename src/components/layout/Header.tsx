import React from 'react';
import { Button } from '../common/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/store';
import { teamNameToKey } from '../../utils/team/team-name-map';

function Header() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  const handleTeamInfoClick = () => {
    if (user && user.favoriteTeam) {
      const teamName = user.favoriteTeam.split(' ')[0];
      const teamSlug = teamNameToKey[teamName as keyof typeof teamNameToKey];

      if (teamSlug) {
        navigate(`/teams/${teamSlug}`);
      } else {
        alert('팀 정보를 불러오지 못했습니다.');
      }
    } else {
      alert('팀 정보를 불러오지 못했습니다.');
    }
  };

  return (
    <header className="bg-white">
      <nav className="container mx-auto px-5 py-5">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-kbo-blue">
            <Link to="/">My KBO</Link>
          </div>

          <div className="flex items-center gap-10">
            <Link
              to="/"
              className="text-gray-900 hover:text-kbo-light-blue transition-colors"
            >
              홈
            </Link>
            {user && (
              <button
                onClick={handleTeamInfoClick}
                className="text-gray-900 hover:text-kbo-light-blue transition-colors"
              >
                팀 대시보드
              </button>
            )}
            <Link
              to="/board"
              className="text-gray-900 hover:text-kbo-light-blue transition-colors"
            >
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
