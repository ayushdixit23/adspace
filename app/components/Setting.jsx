'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { MdEdit, MdSave } from "react-icons/md";
import axios from 'axios';
import { serverUrl } from '@/config';

const Setting = () => {
  const user = useSelector((state) => state.user.user);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [taxid, setTaxid] = useState('');
  const [business, setBusiness] = useState('');
  const [region, setRegion] = useState('');
  const [postal, setPostal] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setName(`${user.firstname || ''} ${user.lastname || ''}`);
      setPhone(user.phone || '');
      setLocation(user.city || '');
      setCountry(user.country || '');
      setTaxid(user.gst || '');
      setBusiness(user.address || '');
      setRegion(user.state || '');
      setPostal(user.pincode || '');
    }
  }, [user]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    const updatedUser = {
      name,
      phone,
      location,
      country,
      taxid,
      business,
      region,
      postal
    };
  
    try {
      const response = await axios.put(
        `${serverUrl}/api/v1/user/updateUser`, 
        updatedUser, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );
  
      if (response.status === 200) {
      } else {
        throw new Error('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  


  if (!user) {
    return <div className='flex justify-center items-center h-full'>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-between mb-4 ss:w-full items-center gap-20">
        <div className="font-Jost px-2 sm:text-2xl font-semibold ss:text-xl">
          Settings
        </div>
      </div>
      <div className="bg-white p-5 rounded-t-lg ss:w-full">
        <div className="font-Jost sm:text-xl font-semibold mb-4 ss:text-sm">
          Account
        </div>
        <div className="border-[0.5px] border-gray-300 rounded-md">
          <div className="flex items-center rounded-sm border-[0.5px] border-gray-300 justify-between p-2.5 font-medium sm:text-sm bg-neutral-100 ss:text-xs font-jost text-[#]">
            Billing Details{' '}
            <button onClick={isEditing ? handleSave : handleEdit} className='bg-black p-1 rounded-full'>
              {isEditing ? <MdSave className='text-white' /> : <MdEdit className='text-white' />}
            </button>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px] border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs">
            Name{' '}
            <span className="text-black font-medium">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-end bg-transparent focus:outline-none"
                disabled={!isEditing}
              />
            </span>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px] border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs">
            Phone{' '}
            <span className="text-black font-medium">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="text-end bg-transparent focus:outline-none"
                disabled={!isEditing}
              />
            </span>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px] border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs">
            Location{' '}
            <span className="text-black font-medium">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-end bg-transparent focus:outline-none"
                disabled={!isEditing}
              />
            </span>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px] border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs">
            Advertiser Id{' '}
            <span className="text-black font-medium">
              <input
                type="text"
                value={user._id || ''}
                className="text-end bg-transparent focus:outline-none"
                disabled={true}
              />
            </span>
          </div>
        </div>
        <div className="font-Jost text-xl font-semibold mt-4 mb-4 ss:text-sm">
          Tax Information
        </div>
        <div className="border-[0.5px] border-gray-300 rounded-md">
          <div className="flex items-center rounded-sm border-[0.5px] border-gray-300 justify-between p-2.5 font-medium sm:text-sm bg-neutral-100 ss:text-xs ">
            Tax Information{' '}
            <button onClick={isEditing ? handleSave : handleEdit} className='bg-black p-1 rounded-full'>
              {isEditing ? <MdSave className='text-white' /> : <MdEdit className='text-white' />}
            </button>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px] border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs ">
            Country{' '}
            <span className="text-black font-medium">
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="text-end bg-transparent focus:outline-none"
                disabled={!isEditing}
              />
            </span>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px] border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs ">
            Tax Registration Id
            <span className="text-black font-medium">
              <input
                type="text"
                value={taxid}
                onChange={(e) => setTaxid(e.target.value)}
                className="text-end bg-transparent focus:outline-none"
                disabled={!isEditing}
              />
            </span>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px] border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs ">
            Business Address
            <span className="text-black font-medium">
              <input
                type="text"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="text-end bg-transparent focus:outline-none"
                disabled={!isEditing}
              />
            </span>
          </div>
          <div className="flex">
            <div className="flex items-center rounded-sm border-[0.5px] border-gray-300 justify-between p-3 text-gray-500 sm:text-sm w-3/6 ss:text-xs ">
              Region
              <span className="text-black font-medium">
                <input
                  type="text"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="text-end bg-transparent focus:outline-none"
                  disabled={!isEditing}
                />
              </span>
            </div>
            <div className="flex items-center rounded-sm border-[0.5px] border-gray-300 justify-between p-3 text-gray-500 sm:text-sm w-3/6 ss:text-xs ">
              Postal Code
              <span className="text-black font-medium">
                <input
                  type="text"
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                  className="text-end bg-transparent focus:outline-none"
                  disabled={!isEditing}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;