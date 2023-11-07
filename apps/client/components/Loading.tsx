import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="grid w-full grid-cols-[repeat(2, auto)] place-items-center gap-28 mt-28 mb-28">
      <div className="loading-anim flex items-center justify-evenly w-[75px] h-[75px]">
        <div className="loading-spin bg-[#bbbb88] h-[80%] w-[6.25px]"></div>
        <div className="loading-spin bg-[#eeaa88] h-[80%] w-[6.25px]"></div>
        <div className="loading-spin bg-[#eedd99] h-[80%] w-[6.25px]"></div>
        <div className="loading-spin bg-[#eec290] h-[80%] w-[6.25px]"></div>
        <div className="loading-spin bg-[#ccc68d] h-[80%] w-[6.25px]"></div>
      </div>
    </div>
  );
};

export default Loading;
