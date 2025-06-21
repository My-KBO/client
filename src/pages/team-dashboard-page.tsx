import TeamBanner from '../components/Team/Banner/team-banner';
import TeamInfoButton from '../components/Team/Banner/team-info-button';
import MatchRecord from '../components/Team/Match/match-record';
import MatchSchedule from '../components/Team/Match/match-schedule';

const TeamDashboardPage = () => {
  return (
    <div>
      <TeamBanner teamKey="lg" />
      <MatchSchedule />
      <MatchRecord />
    </div>
  );
};

export default TeamDashboardPage;
