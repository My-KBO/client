type HighlightCardProps = {
  title: string;
  publishedAt: string;
  videoUrl: string;
  thumbnail: string;
};

const HighlightCard = ({
  title,
  publishedAt,
  videoUrl,
  thumbnail,
}: HighlightCardProps) => {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-48 mt-4 bg-white border border-gray-100 rounded-md overflow-hidden flex-shrink-0
                 hover:shadow-md hover:scale-105 transform transition duration-200 cursor-pointer"
    >
      <div className="bg-gray-100 h-28 overflow-hidden">
        {thumbnail && (
          <img
            src={thumbnail}
            alt="썸네일"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-2 text-sm">
        <div className="font-semibold mb-2 line-clamp-2">{title}</div>
        <div className="text-xs text-gray-500">{publishedAt}</div>
      </div>
    </a>
  );
};

export default HighlightCard;
