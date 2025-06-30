import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import SignUp from './pages/sign-up';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} /> {/*회원가입 페이지*/}
        <Route path="/" element={<HomePage />} />
        <Route
          path="/baseballs/teams/:teamId"
          element={<TeamDashboardPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
