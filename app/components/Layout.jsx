import React from 'react';
import Header from './Header';
import DashboardNavbar from './DashboardNavbar';
const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <DashboardNavbar />
      <main className="flex min-h-screen flex-col p-2 bg-gray-50  ">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
