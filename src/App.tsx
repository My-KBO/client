import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

function MyPage() {
  return <h1>My Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
