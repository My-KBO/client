import { useQuery } from '@tanstack/react-query';
import { TeamName } from '../../../utils/team/team-name-map';
import TeamNewsCard from './NewsCard';
import { getTeamNews } from '../../../services/teamService';

// const news = [
//   {
//     title: '대접전 속 기아의 기적의 역전극!',
//     summary: '김도영 선수가 역전 홈런을 쳤습니다. 정말 최고의 선수!',
//     publisher: '기아신문',
//     author: '홍길동',
//     date: '2025.06.17',
//   },
//   {
//     title: '대접전 속 기아의 기적의 역전극!',
//     summary: '김도영 선수가 역전 홈런을 쳤습니다. 정말 최고의 선수!',
//     publisher: '기아신문',
//     author: '홍길동',
//     date: '2025.06.17',
//   },
//   {
//     title: '대접전 속 기아의 기적의 역전극!',
//     summary: '김도영 선수가 역전 홈런을 쳤습니다. 정말 최고의 선수!',
//     publisher: '기아신문',
//     author: '홍길동',
//     date: '2025.06.17',
//   },
// ];

type News = {
  title: string;
  summary: string;
  date: string;
  url: string;
  thumbnail: string;
};

type TeamNewsProps = {
  teamName: TeamName;
};

const TeamNews = ({ teamName }: TeamNewsProps) => {
  const {
    data: news = [],
    isLoading,
    isError,
  } = useQuery<News[]>({
    queryKey: ['teamNews', teamName],
    queryFn: () => getTeamNews(teamName),
    staleTime: 1000 * 60 * 5,
  });

  if (isError) {
    return (
      <div className="text-center mt-4 text-red-500">
        뉴스를 불러오는 데 실패했습니다.
      </div>
    );
  }

  const parsedNews = news.map((news) => ({
    title: news.title,
    summary: news.summary,
    date: news.date,
    url: news.url,
    thumbnail: news.thumbnail,
  }));

  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-4 mb-4">최근 뉴스</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {parsedNews.slice(0, 4).map((news, index) => (
          <TeamNewsCard key={index} {...news} />
        ))}
      </div>
      <hr className="border-t border-gray-100 my-12" />
    </div>
  );
};

export default TeamNews;
