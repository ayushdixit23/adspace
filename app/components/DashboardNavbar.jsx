import React from 'react';

import Image from 'next/image';
import image1 from '../assets/icons1.png';
import image2 from '../assets/icons.png';
import image3 from '../assets/add.png';
import image4 from '../assets/wallet.png';
import image5 from '../assets/settings.png';
import image6 from '../assets/help-circle.png';
// import { ModeToggle } from "./ModeToggle";

const DashboardNavbar = () => {
  return (
    <div>
      <div className="h-[757px] w-[263.25px] text-black bg-white  box-border">
        <div className="py-[35px] px-[15px] box-border">
          <div className="flex justify-center items-center box-border h-[46px] w-[233px]">
            <div className="flex justify-center gap-3 items-center text-xl font-bold  box-border">
              <Image src={image1} className="sm:w-[50px]  sm: h-[50px]" />
              Ad Space
            </div>
          </div>
          {/* <ModeToggle /> */}
          <div className="flex flex-col space-y-[10px] my-[200px] box-border">
            <div className="bg-[#F8F9FA] font-bold h-[42.66px] flex gap-[10px] items-center  box-border">
              <Image className="h-[20px] w-[20px]" src={image2} />
              Dashboard
            </div>
            <div className="bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center  box-border">
              <Image className="h-[16px] w-[16px]" src={image3} />
              Create Ad
            </div>
            <div className="bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center  box-border">
              <Image className="h-[16px] w-[16px]" src={image4} />
              Billing
            </div>
            <div className="bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center box-border">
              <Image className="h-[16px] w-[16px]" src={image5} />
              Settings
            </div>
          </div>
          <div className="h-[42.66px] w-[224.25px] flex gap-[10px] items-center text-gray-400">
            <Image className="h-[16px] w-[16px]" src={image6} />
            Help
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
