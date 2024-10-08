"use client";
import Image from 'next/image';
import IMG1 from '../assets/userPic.png';
import IMG2 from '../assets/Rectangle.png';
import { use } from 'react';
import { useSelector } from 'react-redux';

const CreateAdView = ({formData}) => {
  const user = useSelector((state) => state.user.user);
  

  const adImageUrl = formData.file ? URL.createObjectURL(formData.file) : IMG2;

  return (
    <div className="w-[250px] h-[300px] bg-white pl-1 flex flex-col justify-around">
      <div className="flex items-start gap-2">
        <div className='w-[30px] h-[30px] overflow-hidden rounded-xl'>
        <Image width={40} height={40} src={formData.communityImage? typeof formData.communityImage==="string"? formData.communityImage:URL.createObjectURL(formData.communityImage):IMG1} alt="user-photo" className="rounded-md w-full h-full object-cover" />
        </div>
       
        <div className="flex flex-col">
          <h1 className="text-[10px] font-semibold">{formData.community ? formData.community : 'Fashion Enthusiasts'}</h1>
          <p className="text-[8px]">By {`${user?.firstname} ${user?.lastname}`}</p>
        </div>
      </div>
      <div className="relative">
        <Image src={adImageUrl} alt="ad-image" width={250} height={200} />
        <button className="absolute bottom-0 text-white bg-[#2D9AFF] rounded-b-[6px] w-[242px] text-left p-2 text-[10px]">
          Buy Now
        </button>
      </div>
      <div>
        <h1 className="text-[12px] font-semibold">{formData.headline ? formData.headline : 'Regan Jackets'}</h1>
        <p className="text-[10px]">{formData.description ? formData.description : 'Get Regan Jackets at 50% off'}</p>
      </div>
    </div>
  );
};

export default CreateAdView;
