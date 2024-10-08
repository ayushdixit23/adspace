'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import IMG1 from '../assets/img1.png';
import IMG2 from '../assets/img2.png';
import IMG3 from '../assets/img3.png';
import { GoArrowRight } from 'react-icons/go';
import Image from 'next/image';
import FeatureCard from '../components/FeatureCard';
import avatar from '../assets/Avatar (2).png';
import Link from 'next/link';
import { InputOTPPattern } from '../components/InputOTPPattern';
import { Button } from '@/components/ui/button';
import { initOTPless, phoneAuth, verifyOTP } from '../../utils/otpless';
import toast from 'react-hot-toast'; // Assuming you're using react-hot-toast
import axios from 'axios';
import { serverUrl } from '@/config';
import Cookies from 'js-cookie';
import { setUser } from '@/redux/UserSlice';
import { useDispatch } from 'react-redux';

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const step = searchParams.get('step');

  const [states, setStates] = useState({
    firstName: '',
    lastName: '',
    pan: '',
    organization: '',
    Gst: '',
    PhoneNumber: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    Address: '',
    City: '',
    State: '',
    PostalCode: '',
    FamousLandMark: '',
    type: 'Individual',
    profile: null,
  });
  const dispatch = useDispatch();

  console.log(states.profile);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      toast.error('Please select a file.');
      return;
    }

    setStates((prev) => ({
      ...prev,
      profile: file,
    }));
  };

  const [otpCode, setOtpCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    initOTPless(() => {
      console.log('OTPless initialized');
    });
  }, []);

  const changeStates = (e) => {
    const { value, name } = e.target;
    setStates((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const profileImageurl = states.profile
    ? URL.createObjectURL(states.profile)
    : avatar;

  const cookieSetter = async (data) => {
    try {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);

      dispatch(setUser(data?.data));
      Cookies.set(`auth`, data.token, { expires: expirationDate });

      return true;
    } catch (e) {
      console.error('Error during login:', e);
      return false;
    }
  };

  const handleSubmit = async () => {
   
    try {
      const formData = new FormData();

      for (const key in states) {
        if (states.hasOwnProperty(key)) {
      
          formData.append(key, states[key]);
        }
      }
    

      const response = await axios.post(
        `${serverUrl}/api/v1/user/new`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        await cookieSetter(response.data);
        toast.success('Account created successfully!');
        router.push('/main/dashboard');

      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Account creation failed. Please try again.');
      console.error('Error creating account:', error);
    }
  };
  const validateForm = () => {
    let newErrors = {};
    if (!states.firstName.trim())
      newErrors.firstName = 'First name is required';
    if (!states.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!states.PhoneNumber.match(/^\d{10}$/))
      newErrors.PhoneNumber = 'Enter a valid 10-digit phone number';
    if (!states.Email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.Email = 'Enter a valid email';
    if (states.Password.length < 6)
      newErrors.Password = 'Password must be at least 6 characters';
    if (states.Password !== states.ConfirmPassword)
      newErrors.ConfirmPassword = 'Passwords do not match';
    if (!states.Address.trim()) newErrors.Address = 'Address is required';
    if (!states.City.trim()) newErrors.City = 'City is required';
    if (!states.State.trim()) newErrors.State = 'State is required';
    if (!states.PostalCode.match(/^\d{6}$/))
      newErrors.PostalCode = 'Enter a valid 6-digit postal code';
    // if (!states.pan.trim()) newErrors.pan = 'PAN is required';

    setErrors(newErrors);
   
    return Object.keys(newErrors).length === 0;
  };

  const handleCardClick = (accountType) => {
    setStates((prev) => ({
      ...prev,
      type: accountType,
    }));
  };

  const handleNextStep = async (route) => {
    if (validateForm()) {
      setLoading(true);
      try {
        await phoneAuth(states.PhoneNumber);
        setOtpSent(true);
        toast.success('OTP sent to your mobile');
        router.push(route);
      } catch (error) {
        console.error('Error sending OTP: ', error.message);
        toast.error('Failed to send OTP');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="mt-7 w-full">
      {Number(step) === 1 && (
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-6">
            <div onClick={() => handleCardClick('Individual')}>
              <FeatureCard
                img={
                  <Image
                    src={IMG1}
                    alt="Individual"
                    className="h-[60px] w-[60px] cursor-pointer"
                  />
                }
                heading="Individual"
                para="Advertise your own app or service to gain traction within the Grovyo user base."
                flag={states.type === 'Individual' ? 'true' : 'false'}
                onClick={() => handleCardClick('Individual')}
              />
            </div>
            <div onClick={() => handleCardClick('Organization')}>
              <FeatureCard
                img={
                  <Image
                    src={IMG2}
                    alt="Organization"
                    className="h-[60px] w-[60px] cursor-pointer"
                  />
                }
                heading="Organization"
                para="Promote your company's apps and services to a wider audience."
                flag={states.type === 'Organization' ? 'true' : 'false'}
              />
            </div>
            <div onClick={() => handleCardClick('Affiliator')}>
              <FeatureCard
                img={
                  <Image
                    src={IMG3}
                    alt="Affiliator"
                    className="h-[60px] w-[60px] cursor-pointer"
                  />
                }
                heading="Affiliator"
                para="Run ads for multiple accounts and earn cashback on your ad spend."
                flag={states.type === 'Affiliator' ? 'true' : 'false'}
              />
            </div>
          </div>
          <Link
            href={'/registration?step=2'}
            className="bg-[#47A6FF] text-white px-4 py-1 text-[16px] rounded-lg font-sans"
          >
            <div className="flex justify-center items-center gap-2">
              Continue
              <GoArrowRight />
            </div>
          </Link>
        </div>
      )}

      {Number(step) === 2 && (
        <div className="flex flex-col items-center">
          <div className="flex flex-col w-full gap-1 items-center mt-4">
            <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
              <Image
                className="h-[70px] w-[70px]"
                src={profileImageurl}
                alt="Avatar"
                width={70}
                height={70}
              />
            </div>
            <div
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                document.getElementById('avatar').click();
              }}
            >
              <div className="text-[14px]">Upload your profile picture</div>
              <input
                type="file"
                id="avatar"
                className="hidden"
                onChange={(e) => handleFileChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[50%] mt-8">
            <div className="flex mx-4 gap-2 ">
              <div className="w-[50%] space-y-1">
                <div className="text-[14px]">First Name</div>
                <input
                  type="text"
                  className="px-2 outline-none w-full"
                  name="firstName"
                  value={states.firstName}
                  onChange={changeStates}
                  placeholder="David"
                />
                {errors.firstName && (
                  <span className="text-red-500">{errors.firstName}</span>
                )}
              </div>
              <div className="space-y-1">
                <div className="text-[14px]">Last Name</div>
                <input
                  type="text"
                  className="px-2 outline-none w-full"
                  name="lastName"
                  value={states.lastName}
                  onChange={changeStates}
                  placeholder="Warner"
                />
                {errors.lastName && (
                  <span className="text-red-500">{errors.lastName}</span>
                )}
              </div>
            </div>

            {states.type !== 'Individual' && (
              <>
                <div className="flex mb-2">
                  <hr className="ml-4 w-[50%]" />
                  <hr className="mx-4 w-[50%]" />
                </div>
                {states.type === 'Organization' && (
                  <>
                    <div className="mx-4 space-y-1">
                      <div className="text-[14px]">Organization Name</div>
                      <input
                        type="text"
                        className="px-2 outline-none w-full"
                        value={states.organization}
                        name="organization"
                        onChange={changeStates}
                        placeholder="WarnerOrganization"
                      />
                    </div>

                    <hr className="mx-4 mb-2" />
                  </>
                )}

                <div className="mx-4 space-y-1">
                  <div className="text-[14px]">
                    PAN {states.type === 'Affiliator' && '(Optional)'}
                  </div>
                  <input
                    type="text"
                    className="px-2 outline-none w-full"
                    name="pan"
                    value={states.pan}
                    onChange={changeStates}
                    placeholder="IOLMA902ND"
                  />
                  {errors.pan && (
                    <span className="text-red-500">{errors.pan}</span>
                  )}
                </div>
                <hr className="mx-4 mb-2" />
                <div className="mx-4 space-y-1">
                  <div className="text-[14px]">
                    GST {states.type === 'Affiliator' && '(Optional)'}
                  </div>
                  <input
                    type="text"
                    className="px-2 outline-none w-full"
                    value={states.Gst}
                    name="Gst"
                    onChange={changeStates}
                    placeholder="JSk33"
                  />
                </div>
              </>
            )}

            <hr className="mx-4 mb-2" />
            <div className="flex mx-4 ">
              <div className="w-[50%] space-y-1">
                <div className="text-[14px]">Phone Number</div>
                <input
                  type="text"
                  className="px-2 outline-none w-full"
                  value={states.PhoneNumber}
                  name="PhoneNumber"
                  onChange={changeStates}
                  placeholder="+91 1234567891"
                />
                {errors.PhoneNumber && (
                  <span className="text-red-500">{errors.PhoneNumber}</span>
                )}
              </div>
              <div className="space-y-1">
                <div className="text-[14px]">Email</div>
                <input
                  type="text"
                  className="px-2 outline-none w-full"
                  value={states.Email}
                  name="Email"
                  onChange={changeStates}
                  placeholder="Smith@gmail.com"
                />
                {errors.Email && (
                  <span className="text-red-500">{errors.Email}</span>
                )}
              </div>
            </div>
            <div className="flex mb-2">
              <hr className="ml-4 w-[50%]" />
              <hr className="mx-4 w-[50%]" />
            </div>
            <div className="flex mx-4">
              <div className="w-[50%] space-y-1">
                <div className="text-[14px]">Password</div>
                <input
                  type="password"
                  className="px-2 outline-none w-full"
                  name="Password"
                  value={states.Password}
                  onChange={changeStates}
                  placeholder="********"
                />
                {errors.Password && (
                  <span className="text-red-500">{errors.Password}</span>
                )}
              </div>
              <div className="space-y-1">
                <div className="text-[14px]">Confirm Password</div>
                <input
                  type="password"
                  className="px-2 outline-none w-full"
                  value={states.ConfirmPassword}
                  name="ConfirmPassword"
                  onChange={changeStates}
                  placeholder="********"
                />
                {errors.ConfirmPassword && (
                  <span className="text-red-500">{errors.ConfirmPassword}</span>
                )}
              </div>
            </div>
            <hr className="mx-4 mb-2" />
            <div className="mx-4 space-y-1">
              <div className="text-[14px]">Address</div>
              <input
                type="text"
                className="px-2 outline-none w-full"
                value={states.Address}
                name="Address"
                onChange={changeStates}
                placeholder="Address"
              />
              {errors.Address && (
                <span className="text-red-500">{errors.Address}</span>
              )}
            </div>
            <hr className="mx-4 mb-2" />
            <div className="mx-4 space-y-1">
              <div className="text-[14px]">Famous Landmark</div>
              <input
                type="text"
                className="px-2 outline-none w-full"
                name="FamousLandMark"
                value={states.FamousLandMark}
                onChange={changeStates}
                placeholder="Famous Landmark"
              />
            </div>
            <hr className="mx-4 mb-2" />
            <div className="flex mx-4 ">
              <div className="w-[50%] space-y-1">
                <div className="text-[14px]">City</div>
                <input
                  type="text"
                  className="px-2 outline-none w-full"
                  name="City"
                  value={states.City}
                  onChange={changeStates}
                  placeholder="City"
                />
                {errors.City && (
                  <span className="text-red-500">{errors.City}</span>
                )}
              </div>
              <div className="space-y-1">
                <div className="text-[14px]">State</div>
                <input
                  type="text"
                  className="px-2 outline-none w-full"
                  value={states.State}
                  name="State"
                  onChange={changeStates}
                  placeholder="State"
                />
                {errors.State && (
                  <span className="text-red-500">{errors.State}</span>
                )}
              </div>
            </div>
            <div className="flex mb-2">
              <hr className="ml-4 w-[50%]" />
              <hr className="mx-4 w-[50%]" />
            </div>
            <div className="mx-4 space-y-1">
              <div className="text-[14px]">Postal Code</div>
              <input
                type="text"
                className="px-2 outline-none w-full"
                name="PostalCode"
                value={states.PostalCode}
                onChange={changeStates}
                placeholder="Postal Code"
              />
              {errors.PostalCode && (
                <span className="text-red-500">{errors.PostalCode}</span>
              )}
            </div>
            <div className="flex justify-center items-center">
              <div
                className="bg-[#47A6FF] text-white cursor-pointer px-4 py-1 text-[16px] rounded-lg font-sans"
                onClick={() => handleNextStep('/registration?step=3')}
              >
                <div className="flex justify-center items-center gap-2">
                  Next Step
                  <GoArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {Number(step) === 3 && (
        <div className="flex flex-col items-center">
          <div className="w-[400px]">
            <h3 className="text-3xl font-semibold mb-4 text-white">
              OTP Verification
            </h3>
            <p className="text-xs text-white/60 mb-4">
              Please enter the OTP sent to your mobile number.
            </p>
            <InputOTPPattern
              className="mb-8 border border-[#363A3D] focus:border-[#9B9C9E] bg-[#1A1D21] text-white"
              value={otpCode}
              setValue={setOtpCode}
            />
            <Button
              type="submit"
          
            onClick={()=>verifyOTP(states.PhoneNumber,otpCode,handleSubmit)}
              className={`bg-[#0366D6] text-white w-full mt-6 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </Button>
            <p
              type="button"
              className="text-[#0366D6] mt-4  flex flex-col items-center"
              onClick={async () => {
                setLoading(true);
                try {
                  await phoneAuth(states.PhoneNumber);
                  setOtpSent(true);
                  toast.success('OTP sent to your mobile');
                } catch (error) {
                  console.error('Error sending OTP: ', error.message);
                  toast.error('Failed to send OTP');
                } finally {
                  setLoading(false);
                }
              }}
              disabled={loading || otpSent}
            >
              {loading ? 'Sending...' : 'Resend OTP'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
