import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< feature/layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
=======
import { Button } from '@mui/material';
import TeamDashboardPage from './pages/team-dashboard-page';
>>>>>>> dev

function MyPage() {
  return <h1>My Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
<<<<<<< feature/layout
        <Route path="/" element={<HomePage />} />
        <Route path="/mypage" element={<MyPage />} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<About />} />
        <Route path="/teams" element={<TeamDashboardPage />} />
>>>>>>> dev
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
