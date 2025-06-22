import TeamBanner from '../components/Team/Banner/team-banner';
import TeamInfoButton from '../components/Team/Banner/team-info-button';
import FanComment from '../components/Team/Comment/fan-comment';
import Highlight from '../components/Team/Highlight/highlight';
import MatchRecord from '../components/Team/Match/match-record';
import MatchSchedule from '../components/Team/Match/match-schedule';
import TeamPlayer from '../components/Team/Player/team-player';

const TeamDashboardPage = () => {
  return (
    <div>
      <TeamBanner teamKey="kia" />
      <MatchSchedule />
      <MatchRecord />
      <TeamPlayer />
      <FanComment />
      <Highlight teamKey="kia" />
    </div>
  );
};

export default TeamDashboardPage;
