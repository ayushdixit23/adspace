'use client';
import React, { useState } from 'react';
import { FaBullhorn } from 'react-icons/fa';
import { VscGraph } from 'react-icons/vsc';
import { HiCursorClick } from 'react-icons/hi';
import { BiConversation } from 'react-icons/bi';
import { MdOutlineFileDownload, MdOndemandVideo } from 'react-icons/md';

const objectives = [
  {
    name: 'Brand awareness and reach',
    id: 1,
    description: 'Increase awareness of your brand or product',
    options: ['Pay for CPM', 'Optimized towards impression'],
    icon: <FaBullhorn />,
  },
  {
    name: 'Traffic',
    id: 2,
    description: 'Increase traffic to your brand or product',
    options: ['Pay for CPM', 'Optimized towards impression'],
    icon: <HiCursorClick />,
  },
  {
    name: 'Conversions',
    id: 3,
    description: 'Increase conversions to your brand or product',
    options: ['Pay for CPM', 'Optimized towards impression'],
    icon: <BiConversation />,
  },
  {
    name: 'App installs',
    id: 4,
    description: 'Increase app installs to your brand or product',
    options: ['Pay for CPM', 'Optimized towards impression'],
    icon: <MdOutlineFileDownload />,
  },
  {
    name: 'Views',
    id: 5,
    description: 'Increase views to your brand or product',
    options: ['Pay for CPM', 'Optimized towards impression'],
    icon: <MdOndemandVideo />,
  },
  {
    name: 'Sales',
    id: 6,
    description: 'Increase sales to your brand or product',
    options: ['Pay for CPM', 'Optimized towards impression'],
    icon: <VscGraph />,
  },
];

const MsetUpAds = ({ formData, setFormData, communities }) => {
  const [selectedObjective, setSelectedObjective] = useState(formData.objective);

  const handleObjectiveSelect = (objective) => {
    setSelectedObjective(objective);
    setFormData((prevFormData) => ({
      ...prevFormData,
      objective: objective,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const categories = [
    "Movies & Entertainment",
    "News",
    "Pet & Animals",
    "Gaming",
    "Career & Education",
    "Anime & Manga",
    "Humor & Memes",
    "Family & Relationships",
    "Sports",
    "Science & Learning",
    "DIY & Crafts",
    "Music & Podcasts",
    "Beauty & Fashion",
    "Health & Fitness",
    "Food & Cooking",
    "Business & Finance",
    "Photography",
    "Travel & Gadgets",
    "Pop Culture",
    "Cars",
    "Motivation & Self-Help",
  ];

  return (
    <div className="h-full px-2 flex flex-col gap-5">
      <form className="flex flex-col gap-5">


        {communities?.length > 0 ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="community" className="text-[16px] font-semibold">
              Community<span className="pl-2 text-red-600">*</span>
            </label>
            <select
              id="community"
              name="community"
              className="rounded-lg bg-white px-2 py-3 border-2 border-[#F2F2F7] active:border-[#2D9AFF] focus:border-[#2D9AFF]"
              value={formData.community}
              onChange={handleChange}
            >
              {
                communities?.map((d) => (
                  <option key={d?._id} value={d?.title}>{d?.title}</option>
                ))
              }
            </select>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold py-2 pn:max-sm:px-2 my-2">
              Community Details
            </h1>
            <div className="my-2 rounded-lg bg-maincolor pb-4 pn:max-sm:px-2">
              <div className="flex py-2 flex-col w-full">
                <div className=" font-semibold py-2">
                  Community Name
                </div>
                <input
                  value={formData.community}
                  onChange={handleChange}
                  type="text"
                  name='community'
                  className="w-full border rounded-lg bg-transparent outline-none p-2"
                  placeholder="Enter Community Name"
                />
              </div>
              <div className="flex py-2 flex-col w-full">
                <div className=" font-semibold py-2">
                  Community Description
                </div>
                <textarea
                  value={formData.communityDesc}
                  onChange={handleChange}
                    name='communityDesc'
                  className="w-full border rounded-lg bg-transparent min-h-[150px] max-h-[300px] outline-none p-2"
                  placeholder="Enter Community Description"
                />
              </div>
              <div className="flex py-2 flex-col w-full">
                <div className=" font-semibold py-2">Category</div>

                <select
                  defaultValue="Humor & Memes"
                  onChange={handleChange}
                  name='communityCategory'
                  className="dark:text-white dark:bg-[#323b4e] w-full "
                >
                  {categories?.map((d) => (
                    <option value={d} key={d} className='border'>
                      {d}
                    </option>
                  ))}
                </select>
                {console.log(formData)}
              </div>
              <div className="flex py-2 flex-col w-full">
                <div className=" font-semibold py-2">Image</div>

                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full bg-transparent h-56 border border-gray-300 border-dashed rounded-lg cursor-pointer   "
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG{" "}
                      </p>
                    </div>

                    <input
                      id="dropzone-file"
                      accept="image/*"
                      onChange={(e) =>
                     setFormData((prev)=>({
                      ...prev,communityImage:e.target.files[0]
                     }))
                      } 
                      type="file"
                      className="w-full hidden border rounded-lg bg-transparent outline-none p-2"
                      placeholder="Enter Community Name"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}


        <div className="flex flex-col gap-2">
          <label htmlFor="ad-name" className="text-[16px] font-semibold">
            Ad Name <span className="pl-2 text-red-600">*</span>
          </label>
          <input
            type="text"
            id="ad-name"
            name="name"
            className="rounded-lg w-full px-2 py-3 border-2 border-[#F2F2F7] focus:border-[#2D9AFF] active:border-[#2D9AFF]"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      </form>
      {/* Objective Selection */}
      <div className="flex flex-col gap-2">
        <div className="text-[16px] font-semibold">
          Objective <span className="pl-2 text-red-600">*</span>
        </div>
        <div className="flex gap-8">
          <div className="flex-1">
            {objectives.map((objective) => (
              <div
                key={objective.id}
                className={`border-2 rounded-lg py-3 px-2 mb-6 flex gap-4 items-center ${objective.id === selectedObjective.id
                  ? 'border-gray-600 font-bold'
                  : ''
                  } border-[#F2F2F7]`}
                onClick={() => handleObjectiveSelect(objective)}
              >
                <span className="text-xl">{objective.icon}</span>
                <span>{objective.name}</span>
              </div>
            ))}
          </div>
          <div className="flex-1 flex items-stretch">
            <div className="bg-[#F6F8F9] flex-grow px-8 py-10 rounded-lg mb-6">
              <h3 className="text-xl font-extrabold mb-2">
                {selectedObjective.name}
              </h3>
              <span className="text-sm text-[#666666]">
                {selectedObjective.description}
              </span>
              {selectedObjective &&
                selectedObjective.options.map((option, index) => (
                  <div key={index} className="font-semibold mt-4">
                    &bull; {option}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* Headline */}
      <div className="flex flex-col gap-2">
        <label htmlFor="headline" className="text-[16px] font-semibold">
          Headline <span className="pl-2 text-red-600">*</span>
        </label>
        <input
          type="text"
          id="headline"
          name="headline"
          className="rounded-lg w-full px-2 py-3 border-2 border-[#F2F2F7] focus:border-[#2D9AFF] active:border-[#2D9AFF]"
          value={formData.headline}
          onChange={handleChange}
        />
      </div>
      {/* Description */}
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-[16px] font-semibold">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="rounded-lg w-full min-h-[80px] text-sm outline-none p-2 border-2 border-[#F2F2F7]"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      {/* Call to Action and Destination URL */}
      <div className="grid grid-cols-5 gap-2 w-full">
        <div className="flex col-span-2 flex-col gap-2 w-full">
          <label htmlFor="action" className="text-[16px] font-semibold">
            Call to action<span className="pl-2 text-red-600">*</span>
          </label>
          <select
            id="action"
            name="action"
            className="rounded-lg py-2 px-3 place-self-stretch border-2 bg-white border-[#F2F2F7]"
            value={formData.actionAndUrl?.action || ''}
            onChange={(e) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                actionAndUrl: {
                  ...prevFormData.actionAndUrl,
                  action: e.target.value,
                },
              }))
            }
          >
            <option value="">Select ...</option>
            {/* Add your options here */}
          </select>
        </div>
        <div className="flex col-span-3 w-full flex-col gap-2">
          <label htmlFor="url" className="text-[16px] font-semibold">
            Destination URL
          </label>
          <input
            type="text"
            id="url"
            name="url"
            placeholder="https://"
            className="rounded-lg outline-none w-full p-2 border-2 border-[#F2F2F7]"
            value={formData.actionAndUrl?.url || ''}
            onChange={(e) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                actionAndUrl: {
                  ...prevFormData.actionAndUrl,
                  url: e.target.value,
                },
              }))
            }
          />
        </div>
      </div>
      {/* File Upload */}
      <div className="flex flex-col gap-2">
        <label htmlFor="ad-file" className="text-[16px] font-semibold">
          Upload Ad File
        </label>
        <input
          type="file"
          id="ad-file"
          name='file'
          className="rounded-lg w-full px-2 py-3 border-2 border-[#F2F2F7] focus:border-[#2D9AFF] active:border-[#2D9AFF]"
          onChange={(e) =>
            setFormData((prevFormData) => ({
              ...prevFormData,
              file: e.target.files[0],
            }))
          }
        />
      </div>
    </div>
  );
};

export default MsetUpAds;
