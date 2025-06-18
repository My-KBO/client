import TeamBanner from '../components/Team/Banner/team-banner';
import TeamInfoButton from '../components/Team/Banner/team-info-button';

const TeamDashboardPage = () => {
  return (
    <div>
      <TeamBanner teamKey="lg" />
      <TeamInfoButton />
    </div>
  );
};

export default TeamDashboardPage;
