'use client';
import { serverUrl } from '@/config';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const AdsHeader = ({ formData, communities }) => {
  const router = useRouter()

  const handleCreateAd = async () => {
    try {
      const formDataToUpload = new FormData();

      formDataToUpload.append('community', formData.community);
      formDataToUpload.append('name', formData.name);
      formDataToUpload.append('objective', JSON.stringify(formData.objective));
      formDataToUpload.append('headline', formData.headline);
      formDataToUpload.append('description', formData.description);
      formDataToUpload.append('actionAndUrl', JSON.stringify(formData.actionAndUrl));
      formDataToUpload.append('file', formData.file);
      formDataToUpload.append('placements', JSON.stringify(formData.placements));
      formDataToUpload.append('estImpressions', formData.estImpressions);
      formDataToUpload.append('estClicks', formData.estClicks);
      formDataToUpload.append('dailyOrWeekly', formData.dailyOrWeekly);
      formDataToUpload.append('interestTags', JSON.stringify(formData.interestTags));
      formDataToUpload.append('communityTags', JSON.stringify(formData.communityTags));
      formDataToUpload.append('gender', formData.gender);
      formDataToUpload.append('ageGroup', formData.ageGroup);
      formDataToUpload.append('location', JSON.stringify(formData.location));
      formDataToUpload.append('startDate', formData.startDate);
      formDataToUpload.append('endDate', formData.endDate);
      formDataToUpload.append('totalBudget', formData.totalBudget);
      formDataToUpload.append('dailyBudget', formData.dailyBudget);
      formDataToUpload.append('focusOn', formData.focusOn);
      formDataToUpload.append('costPerAction', formData.costPerAction);
      formDataToUpload.append("comid", formData.comid)
      formDataToUpload.append("communityName", formData.communityName)
      formDataToUpload.append("communityDesc", formData.communityDesc)
      formDataToUpload.append("communityCategory", formData.communityCategory)
      formDataToUpload.append("communityImage", formData.communityImage)

      let response
      if (communities.length > 0) {
        response = await axios.post(
          `${serverUrl}/api/v1/ads/new`,
          formDataToUpload,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      } else {
        response = await axios.post(
          `${serverUrl}/api/v1/ads/createAdwithCommunity`,
          formDataToUpload,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      }

      if (response.data.success) {
        router.push("/main/dashboard")
        toast.success(response.data?.message)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error("Error creating ad!")
      console.error('Error creating ad:', error);
    }
  };


  return (
    <div className="bg-white h-full text-black border shadow-lg flex justify-between items-center py-3 px-4 sm:px-10">
      <h1 className="font-semibold text-xl">Set up new Ad</h1>
      <div className="flex items-center gap-4 ">
        <Link href="" className="underline">
          Discord
        </Link>
        <button
          className="text-white p-2 bg-[#2D9AFF] rounded-xl px-5 text-sm"
          onClick={handleCreateAd}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AdsHeader;