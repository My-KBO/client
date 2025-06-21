import CommonButton from '../CommonButton/common-button';
import MatchCard from './match-card';
import lgLogo from '../../../assets/images/엘지 트윈스 로고.jpg';
import kiaLogo from '../../../assets/images/기아 타이거즈 로고.png';

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

const MatchSchedule = () => {
  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-4 mb-4">팀 경기 일정</div>
      <CommonButton variant="outlined">경기 전체 일정</CommonButton>
      <div className="grid grid-cols-6 gap-4">
        {matchList.map((match, index) => (
          <MatchCard key={index} {...match} />
        ))}
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default MatchSchedule;
