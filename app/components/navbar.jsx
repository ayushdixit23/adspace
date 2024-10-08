'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';
import { BiWallet } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import image1 from '../assets/icons1.png';
import image2 from '../assets/Icons.png'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MdOutlineLogout } from 'react-icons/md';
import Cookies from "js-cookie";
import toast from 'react-hot-toast';

const Navbar = () => {
  const path = usePathname();
  const [pop, setPop] = useState(false)
  const router = useRouter()

  const openPopup = () => setPop(true);
  const closePopup = () => setPop(false);

  const logout = async () => {
    toast.success("Log Out Successfully!")
    Cookies.remove("auth")
    router.push("/")
  };

  return (
    <>

      {pop && (
        <div className='fixed inset-0 w-screen h-screen flex justify-center items-center '>
          <div className="md:w-1/3 rounded-lg shadow-lg bg-white my-3">
            <div className="flex justify-between border-b border-gray-100 px-5 py-4">
              <div>

                <span className="font-bold text-gray-700 text-lg">Sign Out</span>
              </div>
              <div>
                <button><i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i></button>
              </div>
            </div>

            <div className="px-5 pt-4 text-gray-600">
              Are you sure you want to log out?
            </div>

            <div className="px-5 py-4 gap-3 flex justify-end">
              <button onClick={closePopup} className="text-sm py-2 px-3 border bg-white rounded-sm text-black transition duration-150">Cancel</button>
              <button onClick={logout} className="text-sm py-2 px-3 bg-red-600 rounded-sm text-white transition duration-150">Log Out</button>
            </div>
          </div>
        </div>

      )}

      <div className="h-screen  bg-[#FFFFFF] ">
        <div className="h-full text-black bg-white ">
          <div className="py-[35px] flex  flex-col justify-between h-full px-[15px] ">
            <div className="flex justify-center  items-center  ">
              <div className="flex justify-center gap-3 sm:text-xl md:text-2xl  bg-white items-center font-bold px-2 py-1">
                <Image className="h-[26px] w-[28px] " src={image1} />
                <div>Ad Space</div>
              </div>
            </div>

            <div className="flex flex-col space-y-[10px] -mt-[60px] ">
              <Link
                href={'/main/dashboard'}
                className={`${path === '/main/dashboard'
                  ? 'bg-[#F8F9FA] font-semibold'
                  : 'font-normal'
                  } hover:bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center px-2 border-none rounded-2xl `}
              >
                <Image className="h-[23px] w-[23px]" src={image2} />
                Dashboard
              </Link>
              <Link
                href={'/main/ads'}
                className={`${path === '/main/ads'
                  ? 'bg-[#F8F9FA] font-semibold'
                  : 'font-normal'
                  } hover:bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center px-2 border-none rounded-2xl`}
              >
                {/* <Image className="h-[16px] w-[16px]" src={image3} /> */}
                <FiPlus />
                Create Ad
              </Link>
              <Link
                href={'/main/wallet'}
                className={`${path === '/main/wallet'
                  ? 'bg-[#F8F9FA] font-semibold'
                  : 'font-normal'
                  } hover:bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center px-2 border-none rounded-2xl`}
              >
                {/* <Image className="h-[16px] w-[16px]" src={image4} /> */}
                <BiWallet />
                Billing
              </Link>
              <Link
                href={'/main/settings'}
                className={`${path === '/main/settings'
                  ? 'bg-[#F8F9FA] font-bold'
                  : 'font-normal'
                  } hover:bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center px-2 border-none rounded-2xl`}
              >
                {/* <Image className="h-[16px] w-[16px]" src={image5} /> */}
                <FiSettings />
                Settings
              </Link>
            </div>

            <div onClick={openPopup} className=" flex gap-[6px] cursor-pointer items-center px-4 text-[15px] text-red-400">
              <div><MdOutlineLogout className='text-xl' /></div>
              <div>Log Out</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
