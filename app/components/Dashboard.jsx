'use client';
import Chart from './Chart';
import { useState, useEffect } from 'react';
import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import axios from 'axios';
import DateModal from './DateModal';
import { Switch } from '@/components/ui/switch';
import { DropdownMenuCheckboxes } from './adFilterDropDown';
import Link from 'next/link';
import { serverUrl } from '@/config';
import Cookies from 'js-cookie';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(0);
  const [impression, setImpression] = useState(0);
  const [click, setClick] = useState(0);
  const [cpc, setCpc] = useState(0);
  const [timeSeries, setTimeSeries] = useState([]);
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

  const dashboard = {
    amount: amount,
    impression: impression,
    click: click,
    cpc: cpc,
  };
  console.log(dashboard);

  const handleLast30Days = () => {
    const today = new Date();
    setStartDate(new Date(today.setDate(today.getDate() - 30)));
    setEndDate(new Date());
  };

  const handleLast7Days = () => {
    const today = new Date();
    setStartDate(new Date(today.setDate(today.getDate() - 7)));
    setEndDate(new Date());
  };

  const handleLast24Hours = () => {
    const today = new Date();
    setStartDate(new Date(today.setHours(today.getHours() - 24)));
    setEndDate(new Date());
  };
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
    setLoading(true);

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
        `${serverUrl}/api/v1/ads/ad-stats`,
        {
          params,
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        }
      );

      if (response.data) {
        setAmount(response.data.totalStats.totalAmountSpent);
        setImpression(response.data.totalStats.totalImpressions);
        setClick(response.data.totalStats.totalClicks);
        setTimeSeries(response.data.timeSeries);
        setAds(response.data.ads);
      } else {
        setError('No data found');
      }
    } catch (error) {
      console.error('Error fetching ad stats:', error);
      setError('No data found');
      setAmount(0);
      setImpression(0);
      setClick(0);
      setTimeSeries([]);
      setAds([]);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (id, status, actualStatus) => {
    try {
      const newStatus = !status; // Toggle the status
      const response = await axios.put(
        `${serverUrl}/api/v1/ads/updateAd/${id}/${newStatus}/${actualStatus}`,
        {},
        { headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true, }
      );

      if (response.status === 200) {
        console.log('Ad status updated successfully:', response.data);
        fetchData();
      } else {
        console.error('Failed to update ad status:', response.data);
      }
    } catch (error) {
      console.error('Error updating ad status:', error.message);

    }
  };
  useEffect(() => {
    fetchData();
  }, [endDate, startDate, campaignOptions]);

  return (
    <div className="h-full">
      <div className="ss:w-full ss:flex-col ss:mb-8 sm:flex sm:flex-row sm:justify-between">
        <div className="font-Jost sm:text-2xl font-semibold ss:text-xl ss:mb-3">
          Dashboard
        </div>

        <div className="pp:flex sm:items-center sm:gap-4 pp:gap-20">
          <div>
            <button
              className="font-Jost border-solid border border-gray-300 text-[12px] p-2 bg-white font-medium rounded-l-lg focus:bg-neutral-200 text-[#747677]"
              onClick={handleLast30Days}
            >
              Last 30 days
            </button>
            <button
              className="font-Jost border-solid border border-gray-300 text-[12px] p-2 bg-white font-medium focus:bg-neutral-200 text-[#747677]"
              onClick={handleLast7Days}
            >
              Last 7 days
            </button>
            <button
              className="font-Jost border-solid border border-gray-300 text-[12px] p-2 bg-white font-medium rounded-r-lg focus:bg-neutral-200 text-[#747677]"
              onClick={handleLast24Hours}
            >
              Last 24 hours
            </button>
          </div>

          <div>
            <button
              className="font-Jost mt-2 pp:mt-0 border-solid border border-gray-300 text-[12px] p-2 bg-white font-medium rounded-md gap-1.5 focus:bg-neutral-200 text-[#747677] flex justify-center items-center"
              onClick={handleOpenModal}
            >
              <FaRegCalendarAlt />
              {startDate
                ? `${startDate.toLocaleDateString()} - ${endDate?.toLocaleDateString() || 'Select End Date'
                }`
                : 'Select Date Range'}
            </button>
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
      <div className="sm:flex sm:gap-4 grid grid-cols-2 gap-3 ">
        <div className="bg-white border-solid border-[1px] border-gray-300 p-2 flex flex-col gap-1 rounded-xl w-full">
          <div className="flex items-center justify-between font-Jost md:text-sm text-slate-400 mb-1.5 text-xs">
            Amount Spent{' '}
            <div className="w-4 h-4 rounded-full bg-red-600"> </div>
          </div>
          <div className="font-Jost font-semibold text-xs md:text-base">
            ₹<span>{amount}</span>
          </div>
        </div>
        <div className="bg-white border-solid border-[1px] border-gray-300 p-2 flex flex-col gap-1 rounded-xl w-full">
          <div className="flex items-center justify-between font-Jost md:text-sm text-slate-400 mb-1.5 text-xs">
            Impressions{' '}
            <div className="w-4 h-4 rounded-full bg-blue-400"> </div>
          </div>
          <div className="font-Jost font-semibold text-xs md:text-base">
            <div>{impression}</div>
          </div>
        </div>
        <div className="bg-white border-solid border-[1px] border-gray-300 p-2 flex flex-col gap-1 rounded-xl w-full">
          <div className="flex items-center justify-between font-Jost md:text-sm text-slate-400 mb-1.5 text-xs">
            Clicks <div className="w-4 h-4 rounded-full bg-orange-400"> </div>
          </div>{' '}
          <div className="font-Jost font-semibold text-xs md:text-base">
            <span>{click}</span>
          </div>
        </div>
        <div className="bg-white border-solid border-[1px] border-gray-300 p-2 flex flex-col gap-1 rounded-xl w-full">
          <div className="flex items-center justify-between font-Jost md:text-sm text-slate-400 mb-1.5 text-xs">
            CPC <div className="w-4 h-4 rounded-full bg-green-600"> </div>
          </div>
          <div className="font-Jost font-semibold text-xs md:text-base">
            ₹<span>{cpc}</span>
          </div>
        </div>
      </div>
      <div className=" bg-white mt-8 rounded-md  sm:p-5 ss:w-auto ss:p-2">
        <div className="font-Jost flex justify-between mb-10 items-center ss:text-sm ss:mb-5 sm:text-base">
          Campaign ({ads.length})
          
          <DropdownMenuCheckboxes campaignState={campaignOptions} setCampaignState={setCampaignOptions} />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 text-xs font-Jost font-light text-slate-400 ">
          {timeSeries && timeSeries.length ? (
            <Chart timeSeries={timeSeries} loading={loading} error={error} />
          ) : (
            <div className='w-full h-[300px] flex justify-center items-center bg-gray-200 rounded-md font-bold text-2xl'>Nothing to show</div>
          )}
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
                    <label className="inline-flex items-center cursor-pointer">
                      <Switch
                        checked={campaign.on}
                        onClick={() => handleToggle(campaign.id, campaign.on, campaign.status)}
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
    </div>
  );
};

export default Dashboard;
