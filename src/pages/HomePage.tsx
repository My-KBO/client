import React from 'react';
import Banner from '../components/home/BannerSection';
import RankingSection from '../components/home/Ranking/RankingSection';
import HighlightToday from '../components/home/HighlightToday';
import TeamNews from '../components/common/TeamNews/team-news';
import MatchCardSection from '../components/home/MatchCard/MatchCardSection';

function HomePage() {
  return (
    <main>
      <Banner />
      <RankingSection />
      <MatchCardSection />
      <HighlightToday />
      <TeamNews />
    </main>
  );
}

export default HomePage;
