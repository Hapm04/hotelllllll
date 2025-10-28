import React from 'react';
import Sidebar from '../../components/sidebar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
  <Sidebar />
  <div className="flex-1 overflow-hidden">
    <main className="h-full overflow-y-auto bg-gray-200 p-4">
      <Outlet />
    </main>
  </div>
</div>
  );
};

export default DefaultLayout;
