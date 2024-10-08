'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import IMG4 from '../assets/global.jpg';
import IMG5 from '../assets/setting.png';
import Cross from '../assets/cross.png';
import P1 from '../assets/placement-1.png';
import P2 from '../assets/placement-2.png';
import P3 from '../assets/placement-3.png';
import P4 from '../assets/community.png';
import P5 from '../assets/post.png';
import FeatureCard from './FeatureCard';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import DatePickerComponent from './Date';

const placementsOptions = [
  { src: P1, alt: 'In Feed', label: 'In Feed' },
  { src: P2, alt: 'Video', label: 'Video' },
  { src: P3, alt: 'Banner', label: 'Banner' },
  { src: P4, alt: 'Community', label: 'Community' },
  { src: P5, alt: 'Post', label: 'Post' },
];

const MTargetting = ({ formData, setFormData }) => {

  const [inputInterestValue, setInputInterestValue] = useState('');
  const [inputCommunityValue, setInputCommunityValue] = useState('');
  const [inputLocationValue, setInputLocationValue] = useState('');

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handlePlacementClick = (placementLabel) => {
    const updatedPlacements = formData.placements.includes(placementLabel)
      ? formData.placements.filter((p) => p !== placementLabel)
      : [...formData.placements, placementLabel];
    setFormData({ ...formData, placements: updatedPlacements });
  };

  const handleAddTag = (field, inputValue, setInputValue) => (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setFormData({
        ...formData,
        [field]: [...formData[field], inputValue.trim()],
      });
      setInputValue('');
    }
  };

  const handleRemoveTag = (field, tagToRemove) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((tag) => tag !== tagToRemove),
    });
  };

  const handleDateChange = (type, date) => {
    setFormData((prevData) => ({
      ...prevData,
      [type]: date,
    }));
  };

  return (
    <div className="min-h-full p-2 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold px-2">
          Placements<span className="pl-2 text-red-600">*</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 border-2 rounded-lg border-[#c1c2c4]">
          {placementsOptions.map((placement) => {
            const isSelected = formData.placements.includes(placement.label);
            return (
              <section
                key={placement.label}
                className={`w-full h-[200px] rounded-lg p-4 flex flex-col gap-5 justify-between items-center border-2 ${
                  isSelected
                    ? 'border-blue-500 bg-[#4C9AFF1A]'
                    : 'border-[#F1F1F1]'
                }`}
                onClick={() => handlePlacementClick(placement.label)}
              >
                <Image
                  src={placement.src}
                  alt={placement.label}
                  width={100}
                  height={100}
                />
                <h2 className="font-semibold text-[12px]">{placement.label}</h2>
              </section>
            );
          })}
        </div>
      </div>
      <div className="bg-[#F6F8F9] p-2 flex justify-between items-center">
        <section className="flex gap-5 flex-wrap">
          <div className="flex flex-col items-center">
            <p className="text-[#686B6E] text-[10px]">Est. Impression</p>
            <h1 className="text-[14px] font-semibold">
              {formData.estImpressions}
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#686B6E] text-[10px]">Est. Click</p>
            <h1 className="text-[14px] font-semibold">{formData.estClicks}</h1>
          </div>
        </section>
        <section className="border-2 border-[#CED3D9] flex rounded-lg text-[#747677]">
          <button
            className={`py-2 px-4 ${
              formData.dailyOrWeekly === 'Daily'
                ? 'text-black font-semibold'
                : 'bg-[#e0e0e0]'
            }`}
            onClick={() => setFormData({ ...formData, dailyOrWeekly: 'Daily' })}
          >
            Daily
          </button>
          <div className="border-r-2 border-[#CED3D9]"></div>
          <button
            className={`py-2 px-4 ${
              formData.dailyOrWeekly === 'Weekly'
                ? 'text-black font-semibold'
                : 'bg-[#e0e0e0]'
            }`}
            onClick={() =>
              setFormData({ ...formData, dailyOrWeekly: 'Weekly' })
            }
          >
            Weekly
          </button>
        </section>
      </div>
      <div className="flex gap-5 sm:flex-nowrap">
        <section className="rounded-lg flex-1 bg-[#FAFAFA] border-2 border-[#747677]">
          <FeatureCard
            img={<Image src={IMG4} alt="image-1" />}
            heading="Broad"
            para="Reach Audience across all interests and communities."
            flag="false"
          />
        </section>
        <section className="rounded-lg flex-1 bg-[#FAFAFA] border-2 border-[#747677]">
          <FeatureCard
            img={<Image src={IMG5} alt="image-1" />}
            heading="Custom"
            para="Target Audience with specific interests and communities"
            flag="false"
          />
        </section>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Interest & Tags</h1>
        <div className="w-full border-2 bg-white border-[#D7D7D7] rounded-lg flex flex-wrap items-center gap-2 p-2">
          <input
            type="text"
            value={inputInterestValue}
            onChange={(e) => setInputInterestValue(e.target.value)}
            onKeyDown={handleAddTag(
              'interestTags',
              inputInterestValue,
              setInputInterestValue
            )}
            className="border-none outline-none p-2 w-full"
            placeholder="Type and press Enter to add a tag"
          />
          {formData.interestTags.map((tag, index) => (
            <span
              key={index}
              className="text-[16px] bg-[#F1F1F1] rounded-full flex justify-center items-center py-2 px-4 gap-2 cursor-pointer"
            >
              {tag}
              <span onClick={() => handleRemoveTag('interestTags', tag)}>
                <Image src={Cross} alt="Remove tag" />
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Community Alliance</h1>
        <div className="w-full border-2 bg-white border-[#D7D7D7] rounded-lg flex flex-wrap items-center gap-2 p-2">
          <input
            type="text"
            value={inputCommunityValue}
            onChange={(e) => setInputCommunityValue(e.target.value)}
            onKeyDown={handleAddTag(
              'communityTags',
              inputCommunityValue,
              setInputCommunityValue
            )}
            className="border-none outline-none p-2 w-full"
            placeholder="Type and press Enter to add a tag"
          />
          {formData.communityTags.map((tag, index) => (
            <span
              key={index}
              className="text-[16px] bg-[#F1F1F1] rounded-full flex justify-center items-center py-2 px-4 gap-2 cursor-pointer"
            >
              {tag}
              <span onClick={() => handleRemoveTag('communityTags', tag)}>
                <Image src={Cross} alt="Remove tag" />
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Gender</h1>
        <div className="flex justify-between items-center gap-5">
          {['All', 'Men', 'Women'].map((gender) => (
            <button
              key={gender}
              className={`flex-1 rounded-lg border-2  border-[#D7D7D7]  text-[16px] text-center py-3 px-2 ${
                formData.gender === gender
                  ? 'font-semibold border-black bg-[#FAFAFA]'
                  : ''
              }`}
              onClick={() => setFormData({ ...formData, gender })}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Age Group</h1>
        <div className="flex justify-between items-center gap-5">
          <button
            className={`flex-1 rounded-lg border-2 border-[#D7D7D7] bg-[#FAFAFA] text-[16px] text-center py-3 px-2 ${
              formData.ageGroup === 'All Age Group'
                ? 'font-semibold border-black bg-[#FAFAFA]'
                : ''
            }`}
            onClick={() =>
              setFormData({ ...formData, ageGroup: 'All Age Group' })
            }
          >
            All Age Group
          </button>
          <button
            className={`flex-1 rounded-lg border-2 border-[#D7D7D7] text-[16px] text-center py-3 px-2 ${
              formData.ageGroup === 'Select Age Group'
                ? 'font-semibold border-black bg-[#FAFAFA]'
                : ''
            }`}
            onClick={() =>
              setFormData({ ...formData, ageGroup: 'Select Age Group' })
            }
          >
            Select Age Group
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Location</h1>
        <div className="w-full border-2 bg-white border-[#D7D7D7] rounded-lg flex flex-wrap items-center gap-2 p-2">
          <input
            type="text"
            value={inputLocationValue}
            onChange={(e) => setInputLocationValue(e.target.value)}
            onKeyDown={handleAddTag(
              'location',
              inputLocationValue,
              setInputLocationValue
            )}
            className="border-none outline-none p-2 w-full"
            placeholder="Type and press Enter to add a tag"
          />
          {formData.location.map((tag, index) => (
            <span
              key={index}
              className="text-[16px] bg-[#F1F1F1] rounded-full flex justify-center items-center py-2 px-4 gap-2 cursor-pointer"
            >
              {tag}
              <span onClick={() => handleRemoveTag('location', tag)}>
                <Image src={Cross} alt="Remove tag" />
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <section className="flex flex-1 flex-col gap-4">
          <h1 className="font-semibold">Start Date</h1>
          <DatePickerComponent
            type="startDate"
            value={formData.startDate}
            onChange={(date) => handleDateChange('startDate', date)}
          />
        </section>
        <section className="flex flex-1 flex-col gap-4">
          <h1 className="font-semibold">End Date</h1>
          <DatePickerComponent
            type="endDate"
            value={formData.endDate}
            onChange={(date) => handleDateChange('endDate', date)}
          />
        </section>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Total Budget</h1>
        <div
          className={`flex items-center border-2 rounded-lg p-3 ${
            formData.totalBudget ? 'border-blue-500' : 'border-[#D7D7D7]'
          } focus:border-blue-500`}
        >
          <div className="flex-shrink-0">
            <FaIndianRupeeSign />
          </div>
          <input
            type="text"
            value={formData.totalBudget}
            onChange={handleInputChange('totalBudget')}
            className="ml-2 border-none outline-none p-2 flex-grow"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Daily Budget</h1>
        <input
          type="text"
          value={formData.dailyBudget}
          onChange={handleInputChange('dailyBudget')}
          className={`border-2 rounded-lg px-2 py-3 ${
            formData.dailyBudget ? 'border-blue-500' : 'border-[#D7D7D7]'
          } focus:border-blue-500`}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Focus On</h1>
        <div className="flex gap-4">
          {['Maximum Conversions', 'Maximum Clicks', 'Maximum Impressions'].map(
            (focus) => (
              <button
                key={focus}
                className={`flex-1 rounded-lg border-2 border-[#D7D7D7] text-[16px] text-center px-2 py-3 ${
                  formData.focusOn === focus
                    ? 'font-semibold border-black bg-[#FAFAFA]'
                    : ''
                }`}
                onClick={() => setFormData({ ...formData, focusOn: focus })}
              >
                {focus}
              </button>
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Cost Per Action</h1>
        <input
          type="text"
          value={formData.costPerAction}
          onChange={handleInputChange('costPerAction')}
          className={`border-2 rounded-lg p-3 ${
            formData.costPerAction ? 'border-blue-500' : 'border-[#D7D7D7]'
          } focus:border-blue-500`}
        />
      </div>
    </div>
  );
};

export default MTargetting;
