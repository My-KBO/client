import TeamNewsCard from './NewsCard';

const homeNews = [
  {
    title: 'KIA 김도영, 역전 홈런으로 승리 이끌어!',
    summary: '김도영 선수가 9회말 역전 홈런을 쳐서 팀의 승리를 이끌었습니다.',
    publisher: 'KBO뉴스',
    author: '김기자',
    date: '2025.06.17',
  },
  {
    title: 'LG 트윈스, 연승 행진 계속',
    summary: 'LG 트윈스가 연승을 이어가며 리그 선두 자리를 굳혔습니다.',
    publisher: '야구신문',
    author: '이기자',
    date: '2025.06.17',
  },
  {
    title: 'SSG 랜더스, 새로운 외국인 선수 영입',
    summary:
      'SSG 랜더스가 새로운 외국인 선수를 영입하여 전력 강화를 꾀했습니다.',
    publisher: '스포츠뉴스',
    author: '박기자',
    date: '2025.06.17',
  },
];

const HomeTeamNews = () => {
  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-4 mb-4">최신 뉴스</div>
      <div className="grid grid-cols-3 gap-4">
        {homeNews.map((news, index) => (
          <TeamNewsCard key={index} {...news} />
        ))}
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default HomeTeamNews;
