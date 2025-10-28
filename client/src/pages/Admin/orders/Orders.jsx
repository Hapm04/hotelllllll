import React from "react";

const dummyOrders = [
  { id: "OD001", customer: "Nguyễn Văn A", status: "Chờ xác nhận" },
  // Thêm đơn hàng giả khác nếu cần
];

const Orders = () => {
  return (
    <div className="p-6 space-y-4">
      {/* Tiêu đề */}
      <div>
        <h2 className="bg-blue-200 text-black px-4 py-2 rounded-full w-fit font-semibold">Đơn món ăn yêu cầu</h2>
      </div>

      {/* Bảng đơn hàng */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">STT</th>
              <th className="p-3 text-left">Mã đơn hàng</th>
              <th className="p-3 text-left">Khách hàng</th>
              <th className="p-3 text-left">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order, index) => (
              <tr key={order.id} className="bg-white hover:bg-gray-300 transition text-black">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">
                  <button className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded-full">
                    Xác nhận
                  </button>
                </td>
              </tr>
            ))}
            {dummyOrders.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-400 py-4">Không có đơn hàng nào</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
