import { useQuery } from '@tanstack/react-query';
import { TEAM_DATA } from '../../../utils/team/team-data';
import { TeamName } from '../../../utils/team/team-name-map';
import HighlightCard from './HighlightCard';
import { getTeamHighlight } from '../../../services/teamService';

type Highlight = {
  title: string;
  publishedAt: string;
  videoUrl: string;
  thumbnail: string;
};

type HighlightProps = {
  teamName: TeamName;
};

const Highlight = ({ teamName }: HighlightProps) => {
  const {
    data: highlight = [],
    isLoading,
    isError,
  } = useQuery<Highlight[]>({
    queryKey: ['teamHighlight', teamName],
    queryFn: () => getTeamHighlight(teamName),
    staleTime: 1000 * 60 * 5,
  });

  if (isError) {
    return (
      <div className="text-center mt-4 text-red-500">
        하이라이트를 불러오지 못했습니다.
      </div>
    );
  }

  const parsedHighlight = highlight.map((highlight) => ({
    title: highlight.title,
    publishedAt: highlight.publishedAt,
    videoUrl: highlight.videoUrl,
    thumbnail: highlight.thumbnail,
  }));

  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-6 mb-4">
        {teamName} 하이라이트
      </div>
      <div className="grid grid-cols-5 gap-4">
        {parsedHighlight.map((highlight, index) => (
          <HighlightCard key={index} {...highlight} />
        ))}
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default Highlight;
