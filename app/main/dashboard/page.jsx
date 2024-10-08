import Dashboard from '@/app/components/Dashboard';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col overflow-y-scroll p-6 w-full h-full bg-gray-50 ">
      <Dashboard />
    </div>
  );
  //    <Dashboard />;
};

export default page;
