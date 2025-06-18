import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import TeamDashboardPage from './pages/team-dashboard-page';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Button variant="contained" color="primary">
        MUI Button Test
      </Button>
      <h1 className="text-3xl font-bold text-green-500">Tailwind Test</h1>
    </div>
  );
}

function About() {
  return <h1>My Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<About />} />
        <Route path="/teams" element={<TeamDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
