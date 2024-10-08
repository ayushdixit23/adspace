import Image from 'next/image';
import React from 'react';

const FeatureCard = ({ img, heading, para, flag }) => {
  const borderStyle = flag === 'true' ? 'border-2 border-[#47A6FF]' : '';

  return (
    <div
      className={`flex gap-3 sm:gap-6 p-4 items-center rounded-lg shadow-sm ${borderStyle} $cursor-pointer `}
    >
      {img}
      <div className="flex flex-col gap-1 sm:gap-1">
        <div className="text-[#191F33]  font-bold text:lg sm:text-[16px]">
          {heading}
        </div>
        <div className="text-sm sm:text-[14px] text-[#767E94]">{para}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
