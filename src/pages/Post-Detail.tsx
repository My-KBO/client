import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Post } from '../stores/post-store';
import api from '../services/axios';

const fetchPost = async (postId: string) => {
    const res = await api.get(`/posts/${postId}`);
    return res.data;
  };

const PostDetail = () => {
   
  const { postId } = useParams<{ postId: string }>();

  const { data: post, isLoading, isError } = useQuery<Post>({
    queryKey: ['postDetail', postId],
    queryFn: () => fetchPost(postId!),
    enabled: !!postId,
  });
  
  if (isLoading) return <div className="text-center mt-10">불러오는 중...</div>;
  if (isError || !post) return <div className="text-center mt-10">게시글을 불러오지 못했습니다.</div>;  

  return (
    <div className="w-[1440px] h-[1562px] bg-white flex flex-col items-center pt-[80px] relative isolate">
      
      <div className="w-full h-[294px] bg-[#002561] flex justify-center items-center py-[60px] px-[170px] z-10">
        <div className="w-[1100px] flex flex-col gap-[24px] text-white">
          <h2 className="text-[40px] font-bold">KBO 통합 팬 커뮤니티</h2>
          <p className="text-[16px]">함께 응원하고 소통하는 팬들의 공간입니다</p>
        </div>
      </div>

      {/* 게시글 */}
      <div className="w-full h-[984px] px-[170px] py-[60px] flex flex-col items-center gap-[20px]">
        <div className="w-[1100px] flex justify-between items-start h-[48px]">
          <h2 className="text-[40px] font-bold">{post.title}</h2>
        </div>

        {/* 게시글 본문 */}
        <div className="w-[1100px] flex flex-col gap-[20px]">

          <div className="flex gap-[33px] text-[#9EA4AA] text-[14px] font-semibold">
            <span>{post.authorNickname}</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            <span>조회수 {post.viewCount} </span>
            <span>좋아요 {post.likeCount} </span>
          </div>

          <div className="text-[16px] text-black leading-[28px]">
            {post.content}
          </div>
        </div>

        {/* 댓글 */}
        <div className="w-[1100px] flex flex-col gap-[8px]">
          <textarea
            className="w-full h-[80px] border border-[#D9D9D9] rounded-[8px] px-[16px] py-[12px] text-[16px] text-[#26282B]"
            placeholder="댓글을 입력하세요"
          />
        </div>

        <button className="w-[135px] h-[48px] bg-[#002561] text-white rounded-[8px] text-[16px] mt-4">
          댓글 등록
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
