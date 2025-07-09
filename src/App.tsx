import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Board from './pages/Board';
import CategoryBoard from './pages/CategoryBoard';
import Posting from './pages/Posting';
import Post from './pages/Post';
import MyPage from './pages/My-Page/MyPage';
import TeamDashboardPage from './pages/TeamDashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/board" element={<Board />} />
        <Route path="/category/:slug" element={<CategoryBoard />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/teams/:teamId" element={<TeamDashboardPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
