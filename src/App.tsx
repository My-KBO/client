import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import SignUp from './pages/sign-up';
import TeamDashboardPage from './pages/TeamDashboardPage';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/teams/:teamId" element={<TeamDashboardPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
