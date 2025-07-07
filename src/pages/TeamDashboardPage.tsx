import TeamBanner from '../components/Team/Banner/TeamBanner';
import FanComment from '../components/Team/Comment/FanComment';
import Highlight from '../components/common/Highlight/Highlight';
import MatchRecord from '../components/Team/Match/MatchRecord';
import MatchSchedule from '../components/Team/Match/MatchSchedule';
import TeamPlayer from '../components/Team/Player/TeamPlayer';
import TeamNews from '../components/common/News/TeamNews';

import { useParams } from 'react-router-dom';
import { TeamName, teamKeyMap } from '../utils/team/team-name-map';
import { useEffect } from 'react';

const TeamDashboardPage = () => {
  const { teamId } = useParams<{ teamId: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamKey =
    teamId && teamKeyMap[teamId] ? (teamKeyMap[teamId] as TeamName) : null;

  if (!teamKey) {
    return <div className="text-center">잘못된 팀 주소입니다.</div>;
  }

  return (
    <div>
      <TeamBanner teamName={teamKey} />
      <MatchSchedule teamName={teamKey} />
      <MatchRecord teamName={teamKey} />
      <TeamPlayer teamName={teamKey} />
      <FanComment />
      <Highlight teamName={teamKey} />
      <TeamNews />
    </div>
  );
};

export default TeamDashboardPage;
