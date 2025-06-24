// src/components/team/fan-support-card.tsx
import React from 'react';

type TFanCommentCardProps = {
  fanName: string;
  comment: string;
};

const FanCommentCard = ({ fanName, comment }: TFanCommentCardProps) => (
  <div className="bg-gray-100 rounded-md p-4 w-64 flex-shrink-0">
    <div className="font-semibold ml-2 mb-2">{fanName}</div>
    <p className="text-sm ml-2">{comment}</p>
  </div>
);

export default FanCommentCard;
