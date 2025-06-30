import React from 'react';
import MatchCard from './MatchCard';
import matchCardData from './match-card-data';
import { Button } from '../../common/Button';

const MatchCardSection = () => {
  return (
    <section className="w-full px-[170px] py-[60px] flex flex-col items-center gap-[60px]">
      <div className="w-full flex flex-col items-center mb-10">
        <h2 className="text-2xl text-gray-900 font-bold mb-4">
          25.06.16 경기 일정
        </h2>
        <Button variant="primary-outlined" className="rounded-[8px] w-[240px]">
          경기 전체 일정
        </Button>
      </div>
      <div className="w-full flex flex-row justify-center gap-2 items-stretch">
        {matchCardData.map((match, idx) => (
          <div className="flex-1 max-w-xs" key={idx}>
            <MatchCard {...match} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MatchCardSection;
