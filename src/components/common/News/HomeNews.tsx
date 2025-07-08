import { useQuery } from '@tanstack/react-query';
import NewsCard from './NewsCard';
import { fetchHomeNews } from '../../../services/baseballAPI';

type News = {
  title: string;
  summary: string;
  date: string;
  url: string;
  thumbnail: string;
};

const HomeNews = () => {
  const {
    data: news = [],
    isLoading,
    isError,
  } = useQuery<News[]>({
    queryKey: ['homeNews'],
    queryFn: () => fetchHomeNews(),
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
      <div className="text-2xl font-semibold mt-4 mb-4">최신 뉴스</div>
      <div className="grid grid-cols-5 gap-4">
        {parsedNews.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default HomeNews;
