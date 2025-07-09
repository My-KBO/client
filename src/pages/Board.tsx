import React, { useEffect, useState } from 'react';
import { useUserStore } from '../store/store';
import { useNavigate } from 'react-router-dom';
import api from '../services/axios';
import { usePostStore } from '../store/post-store';

const teamList = [
  { name: '통합 게시판', slug: 'GENERAL' },
  { name: '자유 게시판', slug: 'FREE' },
  { name: 'HOT 게시판', slug: 'HOT' },
  { name: '한화 이글스', slug: 'HANHWA' },
  { name: '삼성 라이온즈', slug: 'SAMSUNG' },
  { name: '두산 베어스', slug: 'DOOSAN' },
  { name: 'LG 트윈스', slug: 'LG' },
  { name: '롯데 자이언츠', slug: 'LOTTE' },
  { name: 'NC 다이노스', slug: 'NC' },
  { name: 'KT 위즈', slug: 'KT' },
  { name: 'SSG 랜더스', slug: 'SSG' },
  { name: '키움 히어로즈', slug: 'KIWOOM' },
  { name: 'KIA 타이거즈', slug: 'KIA' }
];

const Board = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<any[]>([]);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/posts', {
          params: {
            // category: 'GENERAL',
            //search: '',
            page: 1,
            limit: 10
          }
        });
        console.log('응답:', res.data);
        setPosts(Array.isArray(res.data.data) ? res.data.data : []);
      } catch (err) {
        console.error('게시글 불러오기 실패:', err);
      }
    };

    fetchPosts();
  }, []);


  return (
    <div className="flex flex-col items-center pt-20 w-[1440px] h-[2390px] bg-white mx-auto relative">

      {/* Hero Section */}
      <section className="w-full h-[220px] bg-[#002561] text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-2">KBO 통합 팬 커뮤니티</h2>
        <p className="text-sm">함께 응원하고 소통하는 팬들의 공간입니다.</p>

      </section>

      {/* 팀 아이콘 섹션 */}
      <section className="mt-12 w-[1100px]">
        <div className="grid grid-cols-7 gap-y-10 gap-x-6">
          {teamList.map((team, i) => (
            <div
              key={i}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => navigate(`/category/${team.slug}`)}
            >
              <div className="w-[100px] h-[100px] bg-gray-200 rounded-full flex items-center justify-center text-3xl hover:scale-105 transition">
                ⚾
              </div>
              <span className="text-sm mt-2 text-center">{team.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 주간 HOT 리뷰 */}
      {/* <section className="mt-12 w-[1000px]">
        <h3 className="text-lg font-bold mb-4">주간 HOT 리뷰</h3>
        <div className="flex gap-4">
          <button className="border px-4 py-2">게시글 작성하기</button>
          <div className="flex-1 h-[100px] bg-gray-100 rounded p-4 text-sm">오늘 경기는 미쳤다 C C C</div>
          <div className="flex-1 h-[100px] bg-gray-100 rounded p-4 text-sm">심판진 너무한 거 아닙니까 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</div>
        </div>
      </section> */}

      {/* 게시판 */}
      <section className="mt-20 w-[1000px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">통합 게시판</h3>
          <button
            className="border px-4 py-2"
            onClick={() => navigate('/posting')}
          >
            게시글 작성하기
          </button>
        </div>
        <table className="w-full text-sm border-t border-b">
          <thead>
            <tr className="border-b">
              <th className="py-2">제목</th>
              <th>글쓴이</th>
              <th>등록일</th>
              <th>조회</th>
              <th>좋아요</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr className="text-center">
                <td colSpan={5} className="py-4 text-gray-500">
                  게시글이 없습니다.
                </td>
              </tr>
            ) : (
              posts.map((post: any, i) => (
                <tr 
                  key={i} 
                  className="text-center border-b cursor-pointer hover:bg-gray-50"
                  onClick={() => navigate(`/posts/${post.id}`)}
                >
                  <td className="py-2 text-left">{post.title}</td>
                  <td>{post.author || '익명'}</td>
                  <td>{post.createdAt?.slice(0, 10)}</td>
                  <td>{post.views || 0}</td>
                  <td>{post.likes || 0}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Board;
