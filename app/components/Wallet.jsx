'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import image1 from '../assets/wallet.png';
import image2 from '../assets/Icon.png';
import { FaRegCreditCard } from 'react-icons/fa6';
import AddMoneyModal from './AddMoneyModal';
import axios from 'axios';
import moment from 'moment';
import { FaRegCalendarAlt } from 'react-icons/fa';
import DateModal from './DateModal';
import { serverUrl } from '@/config';

const Wallet = () => {
  const [states, setStates] = useState({
    currentBalance: 0,
    transactions: [],
    totalCredits: 0,
    lastTransaction: null,
    NetCost: 0,
    LastPayments: 0,
  });

  const [dates, setDates] = useState({
    start: null,
    end: null,
  });

  const [addMoneyModalOpen, setAddMoneyModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setDates({ start, end });
  };

  const fetchWalletData = async () => {
    try {
      const params = {};
      if (dates.start) {
        params.start = dates.start.toISOString();
      }
      if (dates.end) {
        params.end = dates.end.toISOString();
      }

      const response = await axios.get(
        `${serverUrl}/api/v1/transactions/get-wallet`,
        {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );
      console.log(response.data)
      if (response.data.success) {
        setStates(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWalletData();
  }, [dates.start, dates.end]); // Only trigger when dates change

  return (
    <div className="bg-[#F8F9FA] w-full sm:min-w-[720px] overflow-y-scroll h-full text-black relative">
      {addMoneyModalOpen && (
        <AddMoneyModal setAddMoneyModalOpen={setAddMoneyModalOpen} />
      )}
      {isModalOpen && (
        <DateModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          startDate={dates.start}
          endDate={dates.end}
          handleDateChange={handleDateChange}
        />
      )}
      <div className="flex justify-center h-[70px]">
        <div className="w-full px-7 flex items-center font-bold text-2xl">
          Summary
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center px-7 h-[60%] sm:h-[200px] sm:gap-[20.21px] w-full text-slate-600">
        <div className="bg-[#FFFFFF] my-2 mx-8 sm:mx-0 border py-4 rounded-lg flex justify-between px-6 h-[45%] sm:h-auto w-[90%]">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-[20px] text-black">
              Current Balance
            </div>
            <div className="text-[12px] flex gap-1 items-center">
              <Image className="h-[21px] w-[21px]" src={image1} />
              <div>Available Funds</div>
            </div>
            <div className="text-green-500 text-xl sm:text-2xl font-extrabold">
              &#8377;{states.currentBalance}
            </div>
            <div
              className="border text-green-500 flex justify-center items-center border-green-600 rounded-xl"
              onClick={() => setAddMoneyModalOpen(true)}
            >
              <div className="text-[12px] px-5 py-1">Add Funds</div>
            </div>
          </div>
          <div className="flex flex-col">
            {states?.lastTransaction && <div className="text-[12px]">
              Last Payment on:{' '}
              <span className="text-[#939AAD] ml-5">
                {moment(states?.lastTransaction?.createdAt).format('MMMM Do dddd YYYY')}
              </span>
            </div>}
            <div className="flex flex-col gap-1">
              <div className="text-[12px] flex items-center gap-1">
                <div>Total Credits</div>
                <Image className="w-[17.5px]" src={image2} />
              </div>
              <div className="text-xl text-black">
                &#8377;{states.totalCredits}
              </div>
            </div>

            {/* <div className="text-[12px] text-[#939AAD]">
              Expiring on Aug 20,2025
            </div> */}
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex mx-8 sm:mx-0 my-2 flex-col py-4 gap-4 h-[45%] sm:h-auto w-[90%] px-6 border rounded-lg">
          <div className="flex justify-between">
            <div className="font-bold text-[20px] text-black">Month</div>
            <div className="font-bold">
              {`< ${new Date().toLocaleString('en-US', { month: 'long' }).charAt(0).toUpperCase() + new Date().toLocaleString('en-US', { month: 'long' }).slice(1)} >`}
            </div>
          </div>
          <div className="flex gap-[40%]">
            <div className="flex flex-col gap-[9.6px]">
              <div className="text-[12px] flex items-center gap-1">
                <FaRegCreditCard />
                <div>Net Cost</div>
              </div>
              <div className="font-bold text-xl text-black">
                &#8377;{states?.netCost}
              </div>
            </div>
            {states?.lastTransaction && <div className="flex flex-col gap-[9.6px]">
              <div className="text-[12px] flex items-center gap-1">
                <div>Last Payments</div>
                <Image className="h-[17px] w-[17.5px]" src={image2} />
              </div>
              <div className="font-bold text-xl text-black">
                &#8377; {states?.lastTransaction?.amount}
              </div>
            </div>}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[10px] my-4 px-7 w-full">
        <div className="flex w-full">
          <div className="bg-[#FFFFFF] flex justify-between px-4 border rounded-lg border-none h-[90px] w-full items-center">
            <div className="text-xl font-bold">Transaction history</div>
            <button
              className="font-Jost mt-2 pp:mt-0 border-solid border border-gray-300 text-[12px] p-2 bg-white font-medium rounded-md gap-1.5 focus:bg-neutral-200 text-[#747677] flex justify-center items-center"
              onClick={handleOpenModal}
            >
              <FaRegCalendarAlt />
              {dates.start
                ? `${dates.start.toLocaleDateString()} - ${dates.end?.toLocaleDateString() || 'Select End Date'}`
                : 'Select Date Range'}
            </button>
          </div>
        </div>
        {/* <div className="flex w-full mx-6 sm:mx-0">
          <table className="w-full text-slate-600 min-w-[700px] px-6 overflow-x-scroll">
            <thead>
              <tr className="h-[46px] text-black text-[14px]">
                <th>Transactions ID</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {states.transactions?.map((transaction) => (
                <tr
                  key={transaction.transactionid}
                  className="text-center bg-[#FFFFFF] h-[58px]"
                >
                  <td>{transaction.transactionid}</td>
                  <td>{transaction.type}</td>
                  <td>
                    {moment(transaction.updatedAt).format('MMMM Do dddd YYYY')}
                  </td>
                  <td>{transaction.status}</td>
                  <td className="text-green-600">{transaction.amount}</td>
                  <td>
                    <div className="border cursor-pointer border-green-500 rounded-full inline py-1 px-3 text-[14px] text-green-500">
                      Download
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        <div className="flex w-full mx-6 sm:mx-0">

          <table className="w-full text-slate-600 min-w-[700px] px-6 overflow-x-scroll">
            <thead>
              <tr className="h-[46px] text-black text-[14px]">
                <th>Transactions ID</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>

              {
                states.transactions && states.transactions.length > 0 ?
                  <>
                    {states.transactions.map((transaction) => (
                      <tr
                        key={transaction.transactionid}
                        className="text-center bg-[#FFFFFF] h-[58px]"
                      >
                        <td>{transaction.transactionid}</td>
                        <td>{transaction.type}</td>
                        <td>
                          {moment(transaction.updatedAt).format('MMMM Do dddd YYYY')}
                        </td>
                        <td>{transaction.status}</td>
                        <td className="text-green-600">{transaction.amount}</td>
                        <td>
                          <div className="border cursor-pointer border-green-500 rounded-full inline py-1 px-3 text-[14px] text-green-500">
                            Download
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>

                  :
                  <tr>
                    <td colSpan="6" className="text-center font-semibold text-lg bg-white py-6 h-[300px] text-slate-500">
                      No transactions found.
                    </td>
                  </tr>
              }

            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
};

export default Wallet;
