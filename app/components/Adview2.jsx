import Image from 'next/image';
import IMG1 from '../app/assets/userPic.png';
const AdView2 = () => {
  return (
    <div className="w-[250px] h-[300px] bg-white pl-1 flex flex-col justify-around">
      <div className="flex items-start gap-5">
        <Image src={IMG1} alt="user-photo" />
        <div className="flex flex-col">
          <h1 className="text-[10px] font-semibold">Fashion Enthusiasts</h1>
          <p className="text-[8px]">By Scarlett 3d</p>
        </div>
      </div>
      <div className="relative">
        <Image src="" alt="ad-image" />
        <button className="absolute bottom-0 text-white bg-[#2D9AFF] rounded-b-[6px] w-[242px] text-left p-2 text-[10px]">
          Buy Now
        </button>
      </div>
      <div>
        <h1 className="text-[12px] font-semibold">Regan Jackets</h1>
        <p className="text-[10px]">Get Regan Jackets at 50% off</p>
      </div>
    </div>
  );
};

export default AdView2;
