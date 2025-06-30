import CommonButton from '../CommonButton/common-button';
import { teamLinks } from '../../../utils/team-links';
import { TeamKey } from '../../../utils/team-key-map';

interface TeamInfoButtonProps {
  teamName: string;
}

const TeamInfoButton = ({ teamName }: TeamInfoButtonProps) => {
  const teamLink = teamLinks[teamName];

  console.log('Team link : ', teamLink);

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
