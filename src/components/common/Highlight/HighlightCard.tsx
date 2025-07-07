type HighlightCardProps = {
  matchup: string;
  date: string;
  location: string;
};

const HighlightCard = ({ matchup, date, location }: HighlightCardProps) => {
  return (
    <div className="w-48 mt-4  bg-white border border-gray-100 rounded-md overflow-hidden flex-shrink-0">
      <div className="bg-gray-100 h-28" /> {/* 썸네일 */}
      <div className="p-2 text-sm">
        <div className="font-semibold mb-2">{matchup}</div>
        <div className="text-xs text-gray-500">
          {date} | {location}
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
