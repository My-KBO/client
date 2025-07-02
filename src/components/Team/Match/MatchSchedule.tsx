import CommonButton from '../CommonButton/CommonButton';
import MatchCard from './MatchCard';
import lgLogo from '../../../assets/images/TeamEmblem/lg-twins-emblem.jpg';
import kiaLogo from '../../../assets/images/TeamEmblem/kia-tigers-emblem.png';
import { TeamKey } from '../../../utils/teamKeyMap';
import { useEffect, useState } from 'react';
import { getTeamSchedule } from '../../../services/teamService';

const matchList = [
  {
    date: '6월 28일 (금)',
    time: '18:30',
    stadium: '광주',
    homeTeam: {
      name: (
        <>
          KIA <br /> 타이거즈
        </>
      ),
      logo: kiaLogo,
    },
    awayTeam: {
      name: (
        <>
          LG <br /> 트윈스
        </>
      ),
      logo: lgLogo,
    },
  },
  {
    date: '6월 28일 (금)',
    time: '18:30',
    stadium: '광주',
    homeTeam: {
      name: (
        <>
          KIA <br /> 타이거즈
        </>
      ),
      logo: kiaLogo,
    },
    awayTeam: {
      name: (
        <>
          LG <br /> 트윈스
        </>
      ),
      logo: lgLogo,
    },
  },
  {
    date: '6월 28일 (금)',
    time: '18:30',
    stadium: '광주',
    homeTeam: {
      name: (
        <>
          KIA <br /> 타이거즈
        </>
      ),
      logo: kiaLogo,
    },
    awayTeam: {
      name: (
        <>
          LG <br /> 트윈스
        </>
      ),
      logo: lgLogo,
    },
  },
  {
    date: '6월 28일 (금)',
    time: '18:30',
    stadium: '광주',
    homeTeam: {
      name: (
        <>
          KIA <br /> 타이거즈
        </>
      ),
      logo: kiaLogo,
    },
    awayTeam: {
      name: (
        <>
          LG <br /> 트윈스
        </>
      ),
      logo: lgLogo,
    },
  },
];

type TeamBannerProps = {
  teamKey: TeamKey;
};

const MatchSchedule = ({ teamKey }: TeamBannerProps) => {
  const [schedule, setSchedule] = useState<any>(null); // API 응답 저장용

  useEffect(() => {
    getTeamSchedule(teamKey)
      .then((data) => {
        setSchedule(data); // API 데이터 저장
      })
      .catch((err) => {
        console.error('경기 일정 불러오기 실패:', err);
      });
  }, [teamKey]);

  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-4 mb-4">팀 경기 일정</div>
      <CommonButton variant="outlined">경기 전체 일정</CommonButton>
      <div className="grid grid-cols-4 gap-4">
        {matchList.map((match, index) => (
          <MatchCard key={index} {...match} />
        ))}
      </div>
      <div>
        <h1>API 테스트</h1>
        <pre>
          {schedule ? JSON.stringify(schedule, null, 2) : '불러오는 중...'}
        </pre>
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default MatchSchedule;
