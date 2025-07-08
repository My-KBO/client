import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import api from '../services/axios';

const slugToCategoryMap: Record<string, string> = {
  GENERAL: 'GENERAL',
  FREE: 'FREE',
  HOT: 'HOT',
  HANHWA: 'HANHWA',
  SAMSUNG: 'SAMSUNG',
  DOOSAN: 'DOOSAN',
  LG: 'LG',
  LOTTE: 'LOTTE',
  NC: 'NC',
  KT: 'KT',
  SSG: 'SSG',
  KIWOOM: 'KIWOOM',
  KIA: 'KIA'
};

const teamNameMap: Record<string, string> = {
  GENERAL: '통합 게시판',
  FREE: '자유 게시판',
  HOT: 'HOT 게시판',
  HANHWA: '한화 이글스',
  SAMSUNG: '삼성 라이온즈',
  DOOSAN: '두산 베어스',
  LG: 'LG 트윈스',
  LOTTE: '롯데 자이언츠',
  NC: 'NC 다이노스',
  KT : 'KT 위즈',
  SSG: 'SSG 랜더스',
  KIWOOM: '키움 히어로즈',
  KIA: 'KIA 타이거즈'
};

const CategoryPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams(); // URL의 slug 값을 가져옴
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const category = slugToCategoryMap[slug ?? 'all'];

      try {
        const res = await api.get('/posts', {
          params: {
            category,
            page: 1,
            limit: 20
          }
        });
        setPosts(Array.isArray(res.data.data) ? res.data.data : []);
      } catch (error) {
        console.error('게시글 로딩 실패:', error);
        setPosts([]);
      }
    };

    if (slug) fetchPosts();
  }, [slug]);

  return (
    <div className="w-[1000px] mx-auto pt-20">
      <section className="w-full h-[220px] bg-[#002561] text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-2">KBO 통합 팬 커뮤니티</h2>
        <p className="text-sm">함께 응원하고 소통하는 팬들의 공간입니다.</p>
        <div className="flex gap-4 mt-4">
        <button
            className="px-6 py-2 bg-white text-[#002561] rounded"
            onClick={() => navigate('/login')}> 로그인
          </button>
          <button
            className="px-6 py-2 bg-[#0094FF] text-white rounded"
            onClick={() => navigate('/signup')}> 가입하기
          </button>
        </div>
      </section>
        
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
            {teamNameMap[slug ?? ''] || '알 수 없는 게시판'}
            </h1>
            <button
            className="border px-4 py-2"
            onClick={() => navigate('/posting')}
            >
            게시글 작성하기
            </button>
        </div>
        <table className="w-full text-sm border-t border-b">
        <thead>
          <tr className="border-b text-center">
            <th className="py-2">제목</th>
            <th>글쓴이</th>
            <th>등록일</th>
            <th>조회</th>
            <th>좋아요</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? (
            posts.map((post, i) => (
              <tr key={i} 
              className="text-center border-b cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/posts/${post.id}`)}
              >
                <td className="py-2 text-left">{post.title}</td>
                <td>{post.author}</td>
                <td>{post.date}</td>
                <td>{post.views}</td>
                <td>{post.likes}</td>
              </tr>
            ))
          ) : (
            <tr className="text-center text-gray-400 h-[120px]">
              <td colSpan={5}>게시글이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default CategoryPage;
