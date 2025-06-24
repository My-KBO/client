import CommonButton from '../CommonButton/common-button';

const TeamInfoButton = () => {
  return (
    <div className="flex flex-col gap-2 items-end">
      <CommonButton variant="outlined">굿즈샵 바로가기</CommonButton>
      <CommonButton variant="filled">공식 홈페이지</CommonButton>
    </div>
  );
};

export default TeamInfoButton;
