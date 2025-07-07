import { TEAM_DATA } from '../../utils/team/team-data';
import { useNavigate } from 'react-router-dom';

// 한글 key를 영문 url용으로 매핑
const teamKeyToUrl: Record<string, string> = {
  KIA: 'kiatigers',
  LG: 'lgtwins',
  삼성: 'samsunglions',
  두산: 'doosanbears',
  KT: 'ktwiz',
  SSG: 'ssglanders',
  롯데: 'lottegiants',
  한화: 'hanwhaeagles',
  NC: 'ncdinos',
  키움: 'kiwoomheroes',
};

const TeamDashboardSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full px-[170px] py-[60px] flex flex-col items-center gap-[60px]">
      <h2 className="text-center text-2xl text-gray-900 font-bold">
        팀 대시보드
      </h2>
      <div className="w-full flex justify-center gap-10 flex-wrap">
        {Object.entries(TEAM_DATA).map(([key, team]) => (
          <div key={key} className="flex flex-col items-center gap-4">
            <img
              src={team.emblemImage}
              alt={team.name}
              className="w-auto h-16 cursor-pointer hover:scale-105 transition"
              onClick={() => navigate(`/baseballs/teams/${teamKeyToUrl[key]}`)}
            />
            <span className="text-sm">{team.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamDashboardSection;
