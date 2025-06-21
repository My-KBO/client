import CommonButton from '../CommonButton/common-button';
import MatchCard from './match-card';

const MatchSchedule = () => {
  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold">팀 경기 일정</div>
      <CommonButton variant="outlined">경기 전체 일정</CommonButton>
      <div className="flex">
        <MatchCard></MatchCard>
        <MatchCard></MatchCard>
        <MatchCard></MatchCard>
        <MatchCard></MatchCard>
      </div>
    </div>
  );
};

export default MatchSchedule;
