import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaUsers,
  FaBed,
  FaShoppingCart,
  FaSitemap,
  FaUserFriends,
  FaChartLine,
  FaCartPlus,
  FaSignOutAlt
} from 'react-icons/fa';

import SidebarButton from '../../components/SidebarButton';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = "Nguyễn Nhật Trường";
  const userRole = "Quản lý";

  const menuItems = [
    { path: '/home', name: 'Trang chủ', icon: <FaHome /> },
    { path: '/customers', name: 'Quản lý khách hàng', icon: <FaUsers /> },
    
    // { path: '/rooms', name: 'Quản lý phòng', icon: <FaBed /> },
    { path: '/orders', name: 'Đơn món ăn', icon: <FaShoppingCart /> }, // chỉ có đầu bếp thấy
    { path: '/shiftManagement', name: 'Ca trực', icon: <FaSitemap /> },
    { path: '/employees', name: 'Quản lý nhân viên', icon: <FaUserFriends /> },
    { path: '/invoices', name: 'Thống kê doanh thu', icon: <FaChartLine /> },
    { path: '/orderIngredients', name: 'Đặt hàng', icon: <FaCartPlus /> },
  ];

  const isActive = (path) => location.pathname.includes(path);

  const handleLogout = () => {
    // Chuyển hướng đến trang Login
    navigate('/login');
  };

  return (
    <div className="w-64 bg-black text-white flex flex-col h-full border ">
      {/* User Profile */}
      <div className="flex flex-col items-center py-6">
        <div className="mb-3 w-24 h-24">
          <img
            // style={{ width: '80px', height: '80px' }}
            
            src="/images/avatar.jpg"
            alt="Avatar"
            className="w-25 h-25 rounded-full object-cover border-4 "
          />
        </div>
        <h3 className="text-lg font-medium">{userName}</h3>
        <div className="mt-1 bg-blue-600 px-4 py-1 rounded-full text-sm">
          {userRole}
        </div>
      </div>

      {/* Navigation */}
      <div className="break-after-auto flex-1 flex flex-col px-3 py-2 ">
        {menuItems.map((item, index) => (
          <SidebarButton
          
            key={index}
            to={item.path}
            icon={item.icon}
            text={item.name}
            isActive={isActive(item.path)}
          />
        ))}
      </div>

      {/* Logout Button */}
      <div className="p-3">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-colors"
        >
          <FaSignOutAlt className="mr-2" />
          <span>Thoát</span>
        </button>
        
      </div>
      
    </div>
    
  );
};

export default Sidebar;