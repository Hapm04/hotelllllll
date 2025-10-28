import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout'; // LAYOUT MẶC ĐỊNH

import Dashboard from '../pages/Admin/Dashboard'; // TRANG Dashboard
import Customers from '../pages/Admin/customers';
import Orders from '../pages/Admin/orders'; // TRANG Đơn hàng
import Invoices from '../pages/Admin/invoices'; // TRANG Hóa đơn
import Employees from '../pages/Admin/employees'; // TRANG Hóa đơn
import ShiftManagement from '../pages/Admin/shiftManagement'; // TRANG Hóa đơn
import OrderIngredients from '../pages/Admin/orderIngredients'; // TRANG đặt hàng nguyên liệu
import Login from '../pages/Admin/login'; // TRANG LOGIN
import Home from '../pages/Admin/home'; // TRANG HOME


export default function AppRoutes() {
  return (
    <Routes>
       <Route path="/login" element={<Login />} />

      
      {/* Các trang có layout mặc định */}
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/shiftManagement" element={<ShiftManagement />} />
        <Route path="/orderIngredients" element={<OrderIngredients />} />
        <Route path="/home" element={<Home />} />
      </Route>
      
   
    </Routes>
  );
}
