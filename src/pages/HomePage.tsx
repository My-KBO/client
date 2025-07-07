import React from 'react';
import Banner from '../components/home/BannerSection';
import RankingSection from '../components/home/Ranking/RankingSection';
import HomeHighlight from '../components/common/Highlight/HomeHighlight';
import HomeTeamNews from '../components/common/TeamNews/HomeTeamNews';
import MatchCardSection from '../components/home/MatchCard/MatchCardSection';

function HomePage() {
  return (
    <main>
      <Banner />
      <RankingSection />
      <MatchCardSection />
      <HomeHighlight />
      <HomeTeamNews />
    </main>
  );
}

export default HomePage;
