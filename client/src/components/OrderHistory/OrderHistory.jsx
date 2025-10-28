import React, { useState } from "react";

const fakeData = [
    {
        id: 1,
        date: "2025-04-01",
        items: [
            { name: "Thịt bò", quantity: 5, unit: "kg" },
            { name: "Hành lá", quantity: 2, unit: "bó" },
        ],
    },
    {
        id: 2,
        date: "2025-04-07",
        items: [{ name: "Gạo", quantity: 10, unit: "kg" }],
    },
];

const OrderHistory = () => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const filtered = fakeData.filter((order) => {
        const date = new Date(order.date);
        const from = fromDate ? new Date(fromDate) : null;
        const to = toDate ? new Date(toDate) : null;

        return (
            (!from || date >= from) &&
            (!to || date <= to)
        );
    });

    return (
        <div className="p-6 space-y-6 w-full overflow-auto">


<div className="bg-blue-600 text-white p-4 rounded space-y-4">
  <h3 className="text-lg font-semibold">Lịch sử đơn đặt hàng</h3>

  <div className="flex flex-wrap gap-4 items-center">
    <label className="flex items-center gap-2">
      Từ ngày
      <input
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        className="px-2 py-1 rounded border border-black text-black bg-white"
      />
    </label>
    <label className="flex items-center gap-2">
      Đến ngày
      <input
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        className="px-2 py-1 rounded border border-black text-black bg-white"
      />
    </label>
  </div>
</div>



            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full border border-gray-300">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="px-4 py-2">STT</th>
                            <th className="px-4 py-2">Ngày đặt</th>
                            <th className="px-4 py-2">Nguyên liệu</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white hover:bg-gray-300 transition text-black">
                        {filtered.map((order, index) => (
                            <tr key={order.id}>
                                <td className="px-4 py-2 text-center">{index + 1}</td>
                                <td className="px-4 py-2 text-center">{order.date}</td>
                                <td className="px-4 py-2">
                                    <ul className="list-disc ml-4">
                                        {order.items.map((item, idx) => (
                                            <li key={idx}>
                                                {item.name} - {item.quantity} {item.unit}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan="3" className="text-center text-gray-500 py-4">
                                    Không có đơn đặt hàng nào trong khoảng thời gian này.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderHistory;
