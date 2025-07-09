import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUP';
import Login from './pages/Login';
import Posting from './pages/Posting';
import Board from './pages/Board';
import CategoryBoard from './pages/CategoryBoard';
import Post from './pages/PostDetail';
import MyPage from './pages/My-Page/MyPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
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
        <Route
          path="/baseballs/teams/:teamId"
          element={<TeamDashboardPage />}
        />
        <Route path="/teams/:teamId" element={<TeamDashboardPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
