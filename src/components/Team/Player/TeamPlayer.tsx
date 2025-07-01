import CommonButton from '../CommonButton/CommonButton';
import FeaturedPlayerCard from './FeaturedPlayerCard';
import kimDoyoungImg from '../../../assets/images/김도영.png';

const featuredPlayers = [
  {
    title: '인기 타자',
    position: '3루수',
    name: '김도영',
    statLabel: '타율',
    statValue: '0.500',
    className: 'w-1/2',
    playerImage: kimDoyoungImg,
  },
  {
    title: '인기 타자',
    position: '3루수',
    name: '김도영',
    statLabel: '타율',
    statValue: '0.500',
    className: 'w-1/2',
    playerImage: kimDoyoungImg,
  },
];

const TeamPlayer = () => {
  return (
    <div className="grid place-items-center">
      <div className="text-2xl font-semibold mt-4 mb-4">주간 활약 선수</div>
      <CommonButton variant="outlined">선수 명단 보기</CommonButton>
      <div className="grid grid-cols-2 gap-4 max-w-3xl w-full">
        {featuredPlayers.map((record, index) => (
          <FeaturedPlayerCard key={index} {...record} />
        ))}
      </div>
      <hr className="border-t border-gray-100 my-8" />
    </div>
  );
};

export default TeamPlayer;
