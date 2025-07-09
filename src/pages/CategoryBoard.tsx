import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import api from '../services/axios';
import { teamKeyMap, TeamName } from '../utils/team/team-name-map';
import { TEAM_DATA } from '../utils/team/team-data';

// 카테고리별 매핑 (팀 외 카테고리)
const categoryMap: Record<string, string> = {
  GENERAL: 'GENERAL',
  FREE: 'FREE',
  HOT: 'HOT',
};

// 카테고리별 표시명 매핑
const categoryDisplayMap: Record<string, string> = {
  GENERAL: '통합 게시판',
  FREE: '자유 게시판',
  HOT: 'HOT 게시판',
};

const CategoryPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams(); // URL의 slug 값을 가져옴
  const [posts, setPosts] = useState<any[]>([]);

  // slug를 카테고리로 변환하는 함수
  const getCategoryFromSlug = (slug: string): string => {
    // 팀 카테고리인지 확인
    if (teamKeyMap[slug]) {
      return teamKeyMap[slug];
    }
    // 일반 카테고리인지 확인
    return categoryMap[slug] || '';
  };

  // 카테고리 표시명을 가져오는 함수
  const getCategoryDisplayName = (slug: string): string => {
    // 팀 카테고리인 경우
    if (teamKeyMap[slug]) {
      const teamName = teamKeyMap[slug] as TeamName;
      return TEAM_DATA[teamName]?.name || '알 수 없는 팀';
    }
    // 일반 카테고리인 경우
    return categoryDisplayMap[slug] || '알 수 없는 게시판';
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const category = getCategoryFromSlug(slug ?? '');

      try {
        const res = await api.get('/posts', {
          params: {
            ...(category !== 'GENERAL' ? { category } : {}),
            page: 1,
            limit: 20,
          },
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
        <div className="flex gap-4 mt-4"></div>
      </section>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {getCategoryDisplayName(slug ?? '')}
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
              <tr
                key={i}
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
