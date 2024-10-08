'use client';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const AdComponent = ({ ad }) => {
  const adRef = useRef(null);
  const [hasImpressionSent, setHasImpressionSent] = useState(false);

  useEffect(() => {
    const obNEXT_PUBLIC_SERVER = new IntersectionObNEXT_PUBLIC_SERVER(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasImpressionSent) {
            sendImpression(ad._id);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (adRef.current) {
      obNEXT_PUBLIC_SERVER.observe(adRef.current);
    }

    return () => {
      if (adRef.current) {
        obNEXT_PUBLIC_SERVER.unobserve(adRef.current);
      }
    };
  }, [hasImpressionSent, ad._id]);

  const sendImpression = async (adId) => {
    try {
      await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER}/api/v1/ads/addImpression/${adId}`,
        {
          withCredentials: true,
        }
      );
      setHasImpressionSent(true);
    } catch (error) {
      console.error('Error sending impression:', error);
    }
  };

  return (
    <div
      ref={adRef}
      className="ad bg-gray-200 shadow-lg p-6 rounded-lg mb-10"
      style={{ minHeight: '40rem', marginBottom: '120vh' }}
    >
      {/* Render the ad content here */}
      <h2 className="text-2xl font-bold mb-4">{ad.adname || 'Ad Title'}</h2>
      <p>
        {ad.description || 'This is an ad. Learn more about the product here!'}
      </p>
      <a
        href={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/ads/click/${ad._id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        Learn More
      </a>
    </div>
  );
};

const AdList = ({ ads }) => {
  if (ads.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No ads available.</p>;
  }

  return (
    <div>
      {ads.map((ad) => (
        <AdComponent key={ad._id} ad={ad} />
      ))}
    </div>
  );
};

export default function Add() {
  const [ExampleAds, setExampleAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER}/api/v1/ads`, {
        withCredentials: true,
      })
      .then((response) => {
        setExampleAds(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-10">Ad List</h1>
      {loading ? (
        <p className="text-center">Loading ads...</p>
      ) : (
        <AdList ads={ExampleAds} />
      )}
    </div>
  );
}
