import TeamBanner from '../components/Team/Banner/team-banner';
import FanComment from '../components/Team/Comment/fan-comment';
import Highlight from '../components/common/Highlight/highlight';
import MatchRecord from '../components/Team/Match/match-record';
import MatchSchedule from '../components/Team/Match/match-schedule';
import TeamPlayer from '../components/Team/Player/team-player';
import TeamNews from '../components/common/TeamNews/team-news';

import { useParams } from 'react-router-dom';
import { TeamKey, teamKeyMap } from '../utils/team-key-map';

const TeamDashboardPage = () => {
  const { teamId } = useParams<{ teamId: string }>();

  const teamKey =
    teamId && teamKeyMap[teamId] ? (teamKeyMap[teamId] as TeamKey) : null;

  if (!teamKey) {
    return <div className="text-center">잘못된 팀 주소입니다.</div>;
  }

  return (
    <div>
      <TeamBanner teamKey={teamKey} />
      <MatchSchedule />
      <MatchRecord />
      <TeamPlayer />
      <FanComment />
      <Highlight teamKey={teamKey} />
      <TeamNews />
    </div>
  );
};

export default TeamDashboardPage;
