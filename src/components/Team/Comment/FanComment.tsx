import React from 'react';
import CommonButton from '../CommonButton/CommonButton';
import FanCommentCard from './FanCommentCard';
import { teamLinks } from '../../../utils/team/team-links';
import { TeamName } from '../../../utils/team/team-name-map';

const FanComments = [
  {
    fanName: '김 팬',
    comment: '정말 최고의 팀입니다! 매 경기마다 정이 가네요. ',
  },
  {
    fanName: '김 팬',
    comment: '정말 최고의 팀입니다! 매 경기마다 정이 가네요. ',
  },
];

type TeamPlayerProps = {
  teamName: TeamName;
};

const FanComment = ({ teamName }: TeamPlayerProps) => {
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
          {FanComments.map((comment, index) => (
            <FanCommentCard key={index} {...comment} />
          ))}
        </div>
      </div>
      {/* <hr className="border-t border-gray-100 my-8 mt-16" /> */}
    </div>
  );
};

export default FanComment;
