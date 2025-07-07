import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          filter: 'brightness(0.7)',
        }}
      />

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 drop-shadow-lg px-4">
          MY KBO에 오신 것을 환영합니다
        </h1>
      </div>
    </div>
  );
};

export default Banner;
