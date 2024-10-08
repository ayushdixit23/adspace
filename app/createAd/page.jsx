"use client";
import React, { useEffect, useState } from 'react';
import CreateAdAcordian from '../components/CreateAdAcordian';
import AdsHeader from '../components/AdsHeader';
import CreateAdPreview from '../components/CreateAdPreview';
import styles from '../CustomScrollbarComponent.module.css';
import axios from 'axios';
import { serverUrl } from '@/config';

const page = () => {
  const [communities, setCommunities] = useState([])
  const [formData, setFormData] = useState({
    community: '',
    communityDesc:"",
    communityCategory:"",
    communityImage:null,
    comid:"",
    name: '',
    objective: {
      name: 'Brand awareness and reach',
      id: 1,
      description: 'Increace awareness of your brand or product',
      options: ['Pay for CPM', 'Otimized towards impression'],
    },
    headline: '',
    description: '',
    actionAndUrl: {
      action: '',
      url: '',
    },
    file: null,
    placements: [],
    estImpressions: '',
    estClicks: '',
    dailyOrWeekly: '',
    interestTags: [],
    communityTags: [],
    gender: 'All',
    ageGroup: 'All Age Group',
    location: [],
    startDate: '',
    endDate: '',
    totalBudget: '',
    dailyBudget: '',
    focusOn: '',
    costPerAction: '',
  });

  const fetchCommunity = async () => {
    try {
      const res = await axios.get(`${serverUrl}/api/v1/ads/communities`, {  headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true })
      console.log(res.data)
      if (res.data.success) {
        setCommunities(res.data?.communitywithDps)
        setFormData((prev)=>({
          ...prev, comid:res.data?.communitywithDps[0]?._id, community:res.data?.communitywithDps[0]?.title,
          communityImage:res.data?.communitywithDps[0]?.dps
        }))
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCommunity()
  }, [])

  return (
    <div className="w-screen h-screen flex flex-col fixed">
      <div className="h-[8%]">
        <AdsHeader formData={formData} communities={communities}/>
      </div>
      <div className="h-[92%] ">
        <div className="h-full grid grid-cols-2 w-full">
          <div
            className={`overflow-y-scroll mb-16 bg-[#F6F8F9] ${styles.customScrollbar} col-span-1 p-4`}
          >
            <CreateAdAcordian communities={communities} formData={formData} setFormData={setFormData} />
          </div>
          <div className="col-span-1 bg-[#EEF1F3] p-2 h-full">
            <CreateAdPreview formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
