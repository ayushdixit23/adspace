'use client';
import Image from 'next/image';
import React from 'react';
import Graph from '../assets/graph.png';
import Avtar from '../assets/Avatar16.png';
import { useSelector } from 'react-redux';
const Payment = ({formData}) => {
  return (
    <div className="min-h-full flex flex-col gap-5 p-4">
      <div className="border-2 border-[#D7D7D7] p-3 flex justify-between items-center px-3 rounded-lg">
        <h1 className="font-semibold text-[14px]">Add Payment Method</h1>
        <button className="px-7 py-1 rounded-lg bg-[#FAFAFA] border-2 text-[14px] border-[#D7D7D7] font-semibold">
          Add Money
        </button>
      </div>
      <div>
        <p className="text-[12px] text-[#686B6E]">
          This campaign will begin at the scheduled time, pending  and approval.
          By submitting your ad for approval, you agree to Grovyo’s Terms for
          Self-Serve Advertising.
        </p>
      </div>
      <div className="flex flex-col gap-5 border-2 border-[#D7D7D7] rounded-lg p-3">
        <h1 className="text-[16px] font-semibold">Preview</h1>
        <section className="flex gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-[12px] text-[#686B6E]">Ad name</h1>
            <p className="text-[11px] font-semibold">{formData.name}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[12px] text-[#686B6E]">Ad Goal</h1>
            <p className="text-[11px] font-semibold">{formData.objective.name}</p>
          </div>
        </section>
        <hr />
        <section className="flex gap-8">
          <div className="flex flex-col justify-between gap-2">
            <h1 className="text-[12px] text-[#686B6E]">Budget</h1>
            <div className="flex gap-4">
              <h1 className="flex flex-col gap-2">
                <span className="text-[12px] font-semibold">Total Budget</span>
                <span className="text-[12px] font-semibold">
                  {formData.totalBudget}
                </span>
              </h1>
              <h1 className="flex flex-col gap-2">
                <span className="text-[12px] font-semibold">Daily Budget</span>
                <span className="text-[12px] font-semibold">
                  {formData.dailyBudget}
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <h1 className="text-[12px] text-[#686B6E]">Date & Time</h1>
            <div className="flex gap-4">
              <h1 className="flex flex-col gap-2">
                <span className="text-[12px] font-semibold">Start Date</span>
                <span className="text-[12px] font-semibold">
                  {formData.startDate}
                </span>
              </h1>
              <h1 className="flex flex-col gap-2">
                <span className="text-[12px] font-semibold">End Date</span>
                <span className="text-[12px] font-semibold">
                  {formData.endDate}
                </span>
              </h1>
            </div>
          </div>
        </section>
        <hr />
        <section className="flex flex-col gap-2">
          <h1 className="text-[12px]">Target People</h1>
          <div className="flex gap-10">
            <p className="flex flex-col gap-2">
              <span className="text-[12px] text-[#686B6E] ">Gender</span>
              <span className="text-[12px] font-semibold">{formData.gender}</span>
            </p>
            <p className="flex flex-col gap-2">
              <span className="text-[12px] text-[#686B6E] ">Age Group</span>
              <span className="text-[12px] font-semibold">
                {formData.ageGroup}
              </span>
            </p>
            <p className="flex flex-col gap-2">
              <span className="text-[12px] text-[#686B6E] ">Collection</span>
              <span className="text-[12px] font-semibold">order Now</span>
            </p>
          </div>
        </section>
        <hr />
        <section className="flex gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-[12px]">Location</h1>
            <div className="flex gap-2">
              <button className="rounded-xl text-[10px] bg-[#F3F4F6] font-semibold p-2">
                Delhi
              </button>
              <button className="rounded-xl text-[10px] bg-[#F3F4F6] font-semibold p-2">
                Delhi
              </button>
              <button className="rounded-xl text-[10px] bg-[#F3F4F6] font-semibold p-2">
                Delhi
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[12px]">Types of ad</h1>
            <div>
              <button className="rounded-xl text-[10px] bg-[#F3F4F6] font-semibold p-2">
                In feed
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col gap-43">
        <section className="flex justify-between items-center p-2 bg-[#FAFAFA] rounded-lg">
          <div className="flex gap-4 items-center">
            <Image src={Avtar} />
            <h1 className="text-[16px] font-semibold">Fashions Shops</h1>
            <Image src={Graph} />
            <p className="flex fex-col ">
              <span className="text-[10px] font-semibold">25%</span>
              <span className="text-[10px]">popularity</span>
            </p>
          </div>
          <div>
            <h1 className="text-[14px]">300k Members</h1>
          </div>
        </section>
        <section className="flex justify-between items-center p-2 bg-[#FAFAFA] rounded-lg">
          <div className="flex gap-4 items-center">
            <Image src={Avtar} />
            <h1 className="text-[16px] font-semibold">Louis vitton</h1>
            <Image src={Graph} />
            <p className="flex fex-col ">
              <span className="text-[10px] font-semibold">25%</span>
              <span className="text-[10px]">popularity</span>
            </p>
          </div>
          <div>
            <h1 className="text-[14px]">50k Members</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
