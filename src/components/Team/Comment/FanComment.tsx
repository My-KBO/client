import React from 'react';
import CommonButton from '../CommonButton/CommonButton';
import FanCommentCard from './FanCommentCard';
import { teamLinks } from '../../../utils/team/team-links';
import { TeamName } from '../../../utils/team/team-name-map';
import { useQuery } from '@tanstack/react-query';
import { getTeamComments } from '../../../services/teamService';

type Comments = {
  nickname: string;
  title: string;
};

type TeamPlayerProps = {
  teamName: TeamName;
};

const FanComment = ({ teamName }: TeamPlayerProps) => {
  const {
    data: comments = [],
    isLoading,
    isError,
  } = useQuery<Comments[]>({
    queryKey: ['teamComments', teamName],
    queryFn: () => getTeamComments(teamName),
    staleTime: 1000 * 60 * 5,
  });

  if (isError) {
    return (
      <div className="text-center mt-4 text-red-500">
        팀별 게시물을 불러오는 데 실패했습니다.
      </div>
    );
  }

  const parsedComments = comments.map((hotposts) => ({
    fanName: hotposts.nickname,
    comment: hotposts.title,
  }));

  const teamLink = teamLinks[teamName];

  return (
    <div className="mt-6 w-full max-w-5xl mx-auto">
      <div className="flex justify-between mb-16">
        {/* 제목 + 버튼 */}
        <div className="items-center px-8 mr-8">
          <h2 className="text-2xl font-semibold mb-4">팬들의 응원</h2>
          <CommonButton
            variant="outlined"
            onClick={() => {
              window.location.href = teamLink.comment;
            }}
          >
            팬 커뮤니티 바로가기
          </CommonButton>
        </div>

        {/* 카드 리스트 */}
        <div className="grid grid-cols-2 gap-4">
          {parsedComments.map((comment, index) => (
            <FanCommentCard key={index} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FanComment;
