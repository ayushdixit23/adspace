"use client";

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { DropdownMenuCheckboxes } from './adFilterDropDown';
import DateModal from './DateModal';
import { Switch } from '@/components/ui/switch';
import { serverUrl } from '@/config';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
const Ads = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(new Date());
  const [ads, setAds] = useState([]);
  const [campaignOptions, setCampaignOptions] = useState({
    review: true,
    approved: true,
    deleted: true,
    paused: true,
    active: true,
    blocked: true,
    stopped: true,
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const fetchData = async () => {

    try {

      const token = Cookies.get("auth")
      const params = {
        endDate: endDate.toISOString(),
        campaignOptions,
      };

      if (startDate) {
        params.startDate = startDate.toISOString();
      }
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER}/api/v1/ads/ad-stats`,
        {
          params,
          
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
   
        }
      );

      if (response.data) {
        setAds(response.data.ads);
      } else {  
      }
    } catch (error) {
      console.error('Error fetching ad stats:', error);
      setAds([]);
    }
  };

  const handleToggle = async (id, status,actualStatus) => {
    try {
      const token = Cookies.get("auth")
      const newStatus = !status; // Toggle the status
      const response = await axios.put(
        `${serverUrl}/api/v1/ads/updateAd/${id}/${newStatus}/${actualStatus}`,
        {},
        {  
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log('Ad status updated successfully:', response.data);
        fetchData();
      } else {
        toast.error(response.data?.message)
        console.error('Failed to update ad status:', response.data);
      }
    } catch (error) {
      console.error('Error updating ad status:', error.message);

    }
  };

  useEffect(() => {
    fetchData();
  }, [startDate, endDate, campaignOptions]);
  return (
    <>
      <div className="flex justify-between mb-3  ss:w-full items-center gap-20">
        <div className="font-Jost text-2xl font-semibold ss:text-xl">Ads</div>
        <div className="flex items-center gap-4">
          <div>
          <div className='flex gap-6'>
            <button
              className="font-Jost mt-2 pp:mt-0 border-solid border border-gray-300 text-[12px] p-2 bg-white font-medium rounded-md gap-1.5 focus:bg-neutral-200 text-[#747677] flex justify-center items-center"
              onClick={handleOpenModal}
            >
              <FaRegCalendarAlt />
              {startDate
                ? `${startDate.toLocaleDateString()} - ${
                    endDate?.toLocaleDateString() || 'Select End Date'
                  }`
                : 'Select Date Range'}
            </button>
            <DropdownMenuCheckboxes campaignState={campaignOptions} setCampaignState={setCampaignOptions} />
          </div>
          <DateModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            startDate={startDate}
            endDate={endDate}
            handleDateChange={handleDateChange}
          />
          </div>
        </div>
      </div>
      <div className="py-3 border-solid border border-b-0 border-gray-300 mt-4 flex justify-between items-center md:w-full px-3 rounded-t-md ss:w-full">
        <div className="flex justify-center items-center gap-3 mt-1 font-Jost font-medium text-xl">
          <svg
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.87608 12.618L3.14927 15.1318C1.94434 15.9445 1.56828 17.5479 2.28621 18.8116L2.38545 18.9863C3.16554 20.3595 4.97793 20.7287 6.23307 19.7703M6.87608 12.618L9.84165 17.0146M6.87608 12.618L12.5555 4.44136M9.84165 17.0146L19.7599 15.1224M9.84165 17.0146L13.5405 22.4983C14.2274 23.5168 13.9587 24.8992 12.9402 25.5862C11.9313 26.2667 10.5628 26.0101 9.86899 25.0102L6.23307 19.7703M9.84165 17.0146L6.23307 19.7703M19.7599 15.1224L20.5013 16.2215C20.9108 16.8286 21.7348 16.9888 22.3419 16.5793C22.9489 16.1698 23.1091 15.3458 22.6997 14.7387L14.2972 2.2816C13.8877 1.67456 13.0637 1.51438 12.4567 1.92384C11.8496 2.3333 11.6894 3.15734 12.0989 3.76439L12.5555 4.44136M19.7599 15.1224L12.5555 4.44136M19.8102 1.76149L19.214 4.82907M24.4799 3.94256L20.816 6.41387M24.7529 9.08921L21.6853 8.49293"
              stroke="black"
              strokeWidth="1.2"
            />
          </svg>
          Ads
        </div>
        <Link href="/createAd" className="bg-black rounded-xl text-white flex justify-center items-center gap-3 text-xs  p-1.5 px-3 sm:p-2 sm:pl-6 sm:pr-9">
          {' '}
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.435 0.770935V10.0005M0.820312 5.38573H10.0499"
              stroke="#F8F8F8"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Create Ad
        </Link>
      </div>
      {ads && ads.length > 0 ? (
      <div className="overflow-x-scroll">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">On/Off</th>
              <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm max-w-xs">Name</th>
              <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">Status</th>
              <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">Impressions</th>
              <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">Clicks</th>
              <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">CPC</th>
              <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">CTR</th>
              <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">Amount Spent</th>
            </tr>
          </thead>
          <tbody>
            {ads.map((campaign) => (
              <tr key={campaign.id} className="hover:bg-gray-100 transition duration-200">
       
                <td className="border border-gray-300 text-center p-1">
                  <label className="">
                    <Switch
                      checked={campaign.on}
                      onClick={() => handleToggle(campaign.id, campaign.on,campaign.status)}
                      className="bg-gray-300"
                    />
                  </label>
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  <div className="flex items-center justify-center gap-2">{campaign.name}</div>
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  <div className="flex items-center justify-center gap-2">{campaign.status}</div>
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  {campaign.impressions}
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  {campaign.clicks}
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  {campaign.cpc}
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  {campaign.ctr}%
                </td>
                <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center p-2 py-4">
                  {campaign.amountSpent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ) : (
        <div className="text-center text-gray-500 flex justify-center items-center flex-col h-[300px] w-full border  border-gray-300">
          No ads available. Get started by creating your first ad!
          <Link href="/createAd" className="bg-black rounded-xl text-white flex justify-center items-center mt-5 gap-3 text-xs  p-1.5 px-3 sm:p-2 sm:pl-6 sm:pr-9">
          {' '}
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.435 0.770935V10.0005M0.820312 5.38573H10.0499"
              stroke="#F8F8F8"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Create Ad
        </Link>
        </div>
      )}
      {/* <Ads2 /> */}
    </>
  );
};

export default Ads;
