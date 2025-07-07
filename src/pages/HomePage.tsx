import React from 'react';
import Banner from '../components/home/BannerSection';
import RankingSection from '../components/home/Ranking/RankingSection';
import HomeHighlight from '../components/common/Highlight/HomeHighlight';
import HomeNews from '../components/common/News/HomeNews';
import MatchCardSection from '../components/home/MatchCard/MatchCardSection';

function HomePage() {
  return (
    <main>
      <Banner />
      <RankingSection />
      <MatchCardSection />
      <HomeHighlight />
      <HomeNews />
    </main>
  );
}

export default HomePage;
