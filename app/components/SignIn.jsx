'use client';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import { MdArrowForward } from 'react-icons/md';
import { ValidateSignIn } from '../hooks/ValidateSignIn';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { serverUrl } from '@/config';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/UserSlice';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const SignIn = () => {
  const router = useRouter();
  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
    emailError: '',
  });
  const dispatch = useDispatch()

  const cookieSetter = async (data) => {
    try {

      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);

      dispatch(setUser(data?.data))
      Cookies.set(`auth`, data.token, { expires: expirationDate });

      return true;
    } catch (e) {
      console.error("Error during login:", e);
      return false;
    }
  };


  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = signIn.email
    const password = signIn.password

    // Validate the email/username input
    if (ValidateSignIn(email)) {
      setSignIn({
        ...signIn,
        emailError: '',
      });
     
      try {
        const response = await axios.post(
          `${serverUrl}/api/v1/user/signin`,
          { username: email, password },
          { withCredentials: true }
        );

        if (response.data.success) {
          await cookieSetter(response.data)
          router.push('/main/dashboard');
        } else {
          console.log(response.data.message)
          toast.error(response.data.message)
  
          setSignIn({ ...signIn, emailError: response.data.message });
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    } else {
      setSignIn({
        ...signIn,
        emailError: '* Invalid email or phone number',
      });
    }
  };

  return (
    <div className=" bg-gray-50 flex justify-center">
      <div className=" rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col justify-center items-center gap-4 w-[65%] h-[100%] bg-white ">
        <h1 className="font-semibold text-2xl sm:text-4xl text-black">
          Sign In
        </h1>

        <p className="text-[16px] rounded-lg text-[#464D61] border-2 border-[#EBEEF7] w-full p-2 text-center flex items-center justify-center gap-3">
          <FiPhone /> Continue with Mobile Number
        </p>

        <div className="relative inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-600 -translate-x-1/2 bg-white left-1/2 text-xs">
            or Sign in with Email
          </span>
        </div>

        <p className="text-[8px] text-red-800 float-left">
          {signIn.emailError}
        </p>

        <form
          className="w-full h-[60%] flex flex-col gap-2 sm:gap-4"
          onSubmit={handleSignIn}
        >
          <input
            type="text"
            value={signIn.email}
            onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
             placeholder="Email"
            className="border-2 rounded-lg text-[16px] text-black border-[#EBEEF7] outline-none w-full p-2"
          />
          <input

            value={signIn.password}
            onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
            type="password"
            placeholder="Password"
            className="w-full p-2 border-2 text-[16px] text-black rounded-lg border-[#EBEEF7] outline-none"
          />
          <button
            type="submit"
            className="bg-[#00AAFF] w-full h-[40px] flex justify-center items-center gap-3 text-white rounded-lg font-sans"
          >
            Sign In <MdArrowForward />
          </button>
        </form>

        {/* <div className="w-full text-xs">
          <input type="checkbox" className="text-[#464D61]" />{' '}
          <span className="text-[#636A80]">Keep me logged in</span>
          <Link href={'/'} className="float-right text-[#00AAFF]">
            Forgot password?
          </Link>
        </div> */}

        <p className="text-xs text-gray-500">
          Don't have an account?{' '}
          <Link href="/registration?step=1" className="text-[#00AAFF]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
