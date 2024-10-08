'use client';
import Image from 'next/image';
import { useState } from 'react';
import { BiWallet } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { default as image4, default as image5, default as image6, default as image7, default as image8 } from '../assets/Avatar (2).png';
import image1 from '../assets/Coin.png';
import Link from 'next/link';

const Header = () => {
  // const [isClicked, setIsClicked] = useState(false);
  const user = useSelector((state) => state.user.user);
  // const users = [
  //   { id: 1, name: 'Alice' },
  //   { id: 2, name: 'Bob' },
  //   { id: 3, name: 'Charlie' },
  // ];
  // const [selectedUser, setSelectedUser] = useState(users[0]);

  // const handle = () => {
  //   SetisClicked(!isClicked);
  // };

  return (
    <div className=" w-full h-full bg-[#F8F9FA] mt-0  flex justify-center items-center border-b text-black ">
      <div className="flex px-[20px] py-[17.91px] w-full justify-between">
        <div className="sm:flex hidden gap-[10px] items-center">
          <div className="text-xl font-bold">Ads Manager</div>
     {/* {user?.type !== "Individual" && <div className="font-normal shadow-md bg-white relative border-none  rounded-md flex items-center gap-2 p-0.5 px-3 ">
            <UserDropdown users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      {selectedUser && (
        <div>
          <p>Selected User: {selectedUser.name}</p>
        </div>
      )}
          </div>} */}
        </div>
        {/* {isClicked && (
          <div className="bg-[#FFFFFF] absolute top-[69px] left-[150px] flex flex-col space-y-3 px-2 py-4 border rounded-xl w-[250px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Image className="h-[24px] w-[24px]" src={image4} />
                <div>Brooklyn Simmons</div>
              </div>
              <Image className="h-[17px] w-[17px]" src={image7} />{" "}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Image className="h-[24px] w-[24px]" src={image5} /> Ramon seks
              </div>
              <Image className="h-[17px] w-[17px]" src={image7} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Image className="h-[24px] w-[24px]" src={image6} /> Samara will
              </div>
              <Image className="h-[17px] w-[17px]" src={image7} />
            </div>
            <div className="flex gap-2 font-medium ">
              {" "}
              <div>
                <Image className="h-[24px] w-[24px]" src={image8} />
              </div>{" "}
              Add account
            </div>
          </div>
        )} */}
        <div className="flex gap-[20px]">
          <Link href={"/main/wallet"} className="font-bold border-[2px] flex gap-1 text-[10px]   border-solid bg-[#27AE6040] border-[#27AE60] rounded-xl px-4 py-1">
            <div>
              <Image className="w-[24px] h-[24px]" src={image1} />
            </div>
            <div className=" flex items-center">
              <div>Get $100 AD Credit</div>
            </div>
          </Link>
          <Link href={"/main/wallet"} className="flex justify-center items-center font-bold border-[2px] flex gap-1 text-[15px] border-solid rounded-xl shadow-md px-4 py-1">
            <BiWallet />₹ {user?.currentbalance ? user.currentbalance : 0}
          </Link>
          <div className='w-[40px] rounded-2xl overflow-hidden h-[40px]'>
            <Image
              className="w-full h-full object-cover"
              src={user?.dp}
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
