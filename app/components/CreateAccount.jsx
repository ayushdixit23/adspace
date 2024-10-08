import Image from 'next/image';
import lock from '../app/assets/lock.png';

import cross from '../app/assets/Cross.png';
import image1 from '../app/assets/Frame (2).png';
import image2 from '../app/assets/Frame (3).png';
import image3 from '../app/assets/Frame (4).png';
const CreateAccount = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mt-[50px]">
        <div className="text-[32px] font-medium ">Create an account</div>
        <div className="flex">
          Already have an account?
          <div className="text-blue-500 underline cursor-pointer">Log in</div>
        </div>
      </div>
      <div className="flex text-[15px] h-[56px] m-8 ">
        <Image className="mx-2 h-[20px] w-[20px]" src={lock} />
        We take privacy issues seriously. You can be sure that your personal
        data is securely protected.
        <Image className=" mx-2 h-[20px] w-[20px]" src={cross} />
      </div>
      <div className="flex justify-between w-[861px]">
        <div className="flex flex-col items-center gap-2">
          <div className="h-[20px] w-[20px] rounded-full bg-[#114763] text-white text-center align-middle leading-[20px]">
            1
          </div>
          <div className="text-[#114763]">Select Your Type</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-[20px] w-[20px] rounded-full bg-black text-white text-center align-middle leading-[20px]">
            2
          </div>
          <div>Provide your Basic Info</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-[20px] w-[20px] rounded-full bg-[#0D0D0DB2] text-white text-center align-middle leading-[20px]">
            3
          </div>
          <div className="text-[#0D0D0DB2]">Verify Your OTP</div>
        </div>
      </div>
      <div className="space-y-4 mt-[50px]">
        <div className="flex border rounded-lg gap-8 hover:border-blue-400 p-4 cursor-pointer items-center">
          <Image className="h-[50px] w-[50px]" src={image1} />
          <div className="flex flex-col">
            <div className="font-medium">Individual</div>
            <div className="text-[12px]">
              Advertise your own app or service to gain traction within the
              Grovyo user base.
            </div>
          </div>
        </div>
        <div className="flex border rounded-lg gap-8 hover:border-blue-400 p-4 cursor-pointer items-center">
          <Image className="h-[50px] w-[50px]" src={image2} />
          <div className="flex flex-col">
            <div className="font-medium">Organization</div>
            <div className="text-[12px]">
              Promote your company's apps and services to a wider audience.
            </div>
          </div>
        </div>
        <div className="flex border rounded-lg gap-8 hover:border-blue-400 p-4 cursor-pointer items-center">
          <Image className="h-[50px] w-[50px]" src={image3} />
          <div className="flex flex-col">
            <div className="font-medium">Affiliator</div>
            <div className="text-[12px]">
              Run ads for multiple accounts and earn cashback on your ad spend
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-lg bg-blue-500 mt-8 text-white text-[12px] py-2 px-4 cursor-pointer">
        Continue &#10230;
      </div>
    </div>
  );
};

export default CreateAccount;
