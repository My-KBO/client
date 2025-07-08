import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import SignUp from './pages/sign-up';
import Login from './pages/login';
import Posting from './pages/posting';
import Board from './pages/Board';
import CategoryBoard from './pages/Category-Board';
import Post from './pages/Post-Detail';
import MyPage from './pages/My-Page/My-Page';
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
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} /> {/*회원가입*/}
        <Route path="/login" element={<Login />} /> {/*로그인*/}
        <Route path="/board" element={<Board />} /> {/*게시판*/}
        <Route path="/category/:slug" element={<CategoryBoard />} /> {/*카테고리별 게시판*/}
        <Route path="/posting" element={<Posting />} /> {/*글 작성*/}
        <Route path="/posts/:postId" element={<Post />} /> {/*게시글 상세보기*/}
        <Route path="/mypage" element={<MyPage />} /> {/*마이 페이지*/}
        
      
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
