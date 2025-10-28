import React, { useEffect, useState } from "react";
import axios from "axios";

const InvoicesPage = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/invoices");
        setInvoices(res.data);
      } catch (err) {
        console.error("Lỗi khi lấy danh sách hóa đơn:", err);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div className="p-6 space-y-4">
      {/* Header và Form Filter tương tự */}
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">STT</th>
              <th className="p-3 text-left">Mã hóa đơn</th>
              <th className="p-3 text-left">Phòng</th>
              <th className="p-3 text-left">Tên khách hàng</th>
              <th className="p-3 text-left">Ngày lập</th>
              <th className="p-3 text-left">Người lập</th>
              <th className="p-3 text-left">Tổng tiền</th>
              <th className="p-3 text-left">Trạng thái</th>
              <th className="p-3 text-left">Chi nhánh</th>
              <th className="p-3 text-left">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id} className="bg-white hover:bg-gray-300 transition text-black">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{invoice.id}</td>
                <td className="p-3">{invoice.room}</td>
                <td className="p-3">{invoice.customer}</td>
                <td className="p-3">{invoice.createdAt}</td>
                <td className="p-3">{invoice.creator}</td>
                <td className="p-3">{invoice.total.toLocaleString()}₫</td>
                <td className="p-3">{invoice.status}</td>
                <td className="p-3">{invoice.branch}</td>
                <td className="p-3">
                  <button className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded-full">
                    Xuất
                  </button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesPage;
