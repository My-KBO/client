import TeamBanner from '../components/Team/Banner/team-banner';
import TeamInfoButton from '../components/Team/Banner/team-info-button';
import MatchSchedule from '../components/Team/MatchSchedule/match-schedule';

const TeamDashboardPage = () => {
  return (
    <div>
      <TeamBanner teamKey="lg" />
      <MatchSchedule />
    </div>
  );
};

export default TeamDashboardPage;
