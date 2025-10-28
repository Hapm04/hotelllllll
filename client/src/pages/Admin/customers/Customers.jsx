import React, { useEffect, useState } from "react";
import axios from "axios";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/customers");
        setCustomers(res.data);
      } catch (err) {
        console.error("Lỗi khi lấy khách hàng:", err);
      }
    };

    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/customers/booking-history");
        setBookings(res.data);
      } catch (err) {
        console.error("Lỗi khi lấy lịch sử đặt phòng:", err);
      }
    };

    fetchCustomers();
    fetchBookings();
  }, []);

  return (
    <div className="p-6 space-y-10 ">
      {/* Lịch sử đặt phòng */}
      <section className="bg-gray-500 rounded-xl p-4 text-white space-y-4">
        <h2 className="text-lg font-semibold">Lịch sử đặt phòng của khách hàng</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left mt-4 bg-white overflow-hidden rounded-xl">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">STT</th>
                <th className="px-4 py-2">Mã đặt</th>
                <th className="px-4 py-2">Tên</th>
                <th className="px-4 py-2">Ngày đặt</th>
                <th className="px-4 py-2">Phòng</th>
                <th className="px-4 py-2">Số ngày</th>
                <th className="px-4 py-2">Trả trước</th>
                <th className="px-4 py-2">Ngày tạo</th>
              </tr>
            </thead>
            <tbody className=" text-black">
              {bookings.map((booking, index) => (
                <tr key={booking.OrderID}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{booking.CodeBook}</td>
                  <td className="px-4 py-2">{booking.CustomerName}</td>
                  <td className="px-4 py-2">{booking.OrderDate}</td>
                  <td className="px-4 py-2">{booking.RoomNumber}</td>
                  <td className="px-4 py-2">{booking.NumberOfDays}</td>
                  <td className="px-4 py-2">{booking.TotalAmount}</td>
                  <td className="px-4 py-2">{booking.CreatedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Danh sách khách hàng */}
      <section className="bg-gray-500 rounded-xl p-4  space-y-4">
        <h2 className="text-lg font-semibold">Danh sách khách hàng</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left mt-4 bg-white rounded-xl overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">STT</th>
                <th className="px-4 py-2">Mã khách hàng</th>
                <th className="px-4 py-2">Tên</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {customers.map((cus, index) => (
                <tr key={cus.CustomerID}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{cus.CustomerID}</td>
                  <td className="px-4 py-2">{cus.FullName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Customer;
