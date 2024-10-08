'use client';
import Stepper from '../components/Stepper';
import { FaLock } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Components = ({ children }) => {
  const search = useSearchParams();
  const step = search.get('step');
  return (
    <div className=" min-h-[100vh] bg-white text-black py-7 flex flex-col items-center ">
      <div>
        <h1 className=" text-2xl  sm:text-3xl  font-semibold">
          Create an account
        </h1>
        <p className="text-sm text-center mt-3  text-[#666666]">
          Already have an account ?{' '}
          <Link
            href={'/login'}
            className="text-[#b3d1ed] underline font-semibold"
          >
            Log in
          </Link>
        </p>
      </div>
      <div className="flex text-[15px] h-[56px] rounded-xl p-2 m-8 ring-1 ring-slate-100 items-center gap-2">
        <FaLock />
        We take privacy issues seriously. You can be sure that your personal
        data is securely protected
        <RxCross2 className="text-[16px]" />
      </div>
      <Stepper step={Number(step)} />
      <div className=" w-full">{children}</div>
    </div>
  );
}

export default Components;