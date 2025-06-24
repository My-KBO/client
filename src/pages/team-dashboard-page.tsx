import TeamBanner from '../components/Team/Banner/team-banner';
import FanComment from '../components/Team/Comment/fan-comment';
import Highlight from '../components/common/Highlight/highlight';
import MatchRecord from '../components/Team/Match/match-record';
import MatchSchedule from '../components/Team/Match/match-schedule';
import TeamPlayer from '../components/Team/Player/team-player';
import TeamNews from '../components/common/TeamNews/team-news';

const TeamDashboardPage = () => {
  return (
    <div>
      <TeamBanner teamKey="kia" />
      <MatchSchedule />
      <MatchRecord />
      <TeamPlayer />
      <FanComment />
      <Highlight teamKey="kia" />
      <TeamNews />
    </div>
  );
};

export default TeamDashboardPage;
