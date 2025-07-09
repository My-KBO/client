import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Post } from '../store/post-store';
import api from '../services/axios';
import { useUserStore } from '../store/store';
import KboBanner from '../components/common/Board/KboBanner';

const fetchPost = async (postId: string) => {
  const res = await api.get(`/posts/${postId}`);
  return res.data;
};

const toggleLike = async ({
  postId,
  token,
}: {
  postId: string;
  token: string;
}) => {
  const res = await api.post(
    `/posts/${postId}/like`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
};

const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const queryClient = useQueryClient();
  const token = useUserStore.getState().accessToken;

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery<Post>({
    queryKey: ['postDetail', postId],
    queryFn: () => fetchPost(postId!),
    enabled: !!postId,
  });

  const { mutate: likePost, status: likeStatus } = useMutation({
    mutationFn: () => toggleLike({ postId: postId!, token: token! }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
    onError: () => {
      alert('추천은 로그인한 사용자만 가능합니다.');
    },
  });
  const isLiking = likeStatus === 'pending';

  if (isLoading) return <div className="text-center mt-10">불러오는 중...</div>;
  if (isError || !post)
    return (
      <div className="text-center mt-10">게시글을 불러오지 못했습니다.</div>
    );

  return (
    <div className="w-full bg-white flex flex-col items-center pt-20 relative">
      <KboBanner />

      {/* 게시글 */}
      <div className="w-full px-16 py-12 flex flex-col items-center gap-6">
        <div className="w-[1100px] flex justify-between items-start">
          <h2 className="text-4xl font-bold break-words">{post.title}</h2>
        </div>

        {/* 게시글 본문 */}
        <div className="w-[1100px] flex flex-col gap-6">
          <div className="flex gap-8 text-gray-500 text-sm font-semibold">
            <span>{post.user?.nickname || '익명'}</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
            <span>조회수 {post.views} </span>
            <span>좋아요 {post.likes_count ?? 0} </span>

            {token && (
              <button
                onClick={() => likePost()}
                disabled={isLiking}
                className="ml-2 px-3 py-1 bg-[#002561] text-white rounded text-sm disabled:opacity-50"
              >
                ❤️ 좋아요
              </button>
            )}
          </div>

          <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm text-base text-black leading-relaxed whitespace-pre-wrap break-words">
            {post.content}
          </div>
        </div>

        {/* 댓글 */}
        {/* <div className="w-[1100px] flex flex-col gap-2">
          <textarea
            className="w-full min-h-[80px] border border-gray-300 rounded-lg px-4 py-3 text-base resize-y"
            placeholder="댓글을 입력하세요"
          />
        </div>

        <button className="w-auto px-8 py-3 bg-[#002561] text-white rounded-lg text-base font-medium hover:bg-[#001a4a] transition-colors">
          댓글 등록
        </button> */}
      </div>
    </div>
  );
};

export default PostDetail;
