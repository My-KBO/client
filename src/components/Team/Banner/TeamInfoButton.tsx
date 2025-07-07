import CommonButton from '../CommonButton/CommonButton';
import { teamLinks } from '../../../utils/team/team-links';

interface TeamInfoButtonProps {
  teamName: string;
}

const TeamInfoButton = ({ teamName }: TeamInfoButtonProps) => {
  const teamLink = teamLinks[teamName];

  if (!teamLink) return null; // 유효하지 않은 팀 -> 렌더링X

  return (
    <div className="flex flex-col gap-2 items-end">
      <CommonButton
        variant="outlined"
        onClick={() => window.open(teamLink.shop, '_blank')}
      >
        굿즈샵 바로가기
      </CommonButton>
      <CommonButton
        variant="filled"
        onClick={() => window.open(teamLink.official, '_blank')}
      >
        공식 홈페이지
      </CommonButton>
    </div>
  );
};

export default TeamInfoButton;
