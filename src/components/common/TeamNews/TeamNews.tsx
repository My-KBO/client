import TeamNewsCard from './TeamNewsCard';

const news = [
  {
    title: '대접전 속 기아의 기적의 역전극!',
    summary: '김도영 선수가 역전 홈런을 쳤습니다. 정말 최고의 선수!',
    publisher: '기아신문',
    author: '홍길동',
    date: '2025.06.17',
  },
  {
    title: '대접전 속 기아의 기적의 역전극!',
    summary: '김도영 선수가 역전 홈런을 쳤습니다. 정말 최고의 선수!',
    publisher: '기아신문',
    author: '홍길동',
    date: '2025.06.17',
  },
  {
    title: '대접전 속 기아의 기적의 역전극!',
    summary: '김도영 선수가 역전 홈런을 쳤습니다. 정말 최고의 선수!',
    publisher: '기아신문',
    author: '홍길동',
    date: '2025.06.17',
  },
];

const TeamNews = () => {
  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-4 mb-4">최근 뉴스</div>
      <div className="grid grid-cols-3 gap-4">
        {news.map((news, index) => (
          <TeamNewsCard key={index} {...news} />
        ))}
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default TeamNews;
