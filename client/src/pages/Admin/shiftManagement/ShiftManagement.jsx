import React from "react";

const ShiftManagement = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Tiêu đề */}
      
      <button className="px-2 py-1 bg-blue-700 rounded hover:bg-blue-800">
          Điểm danh
        </button>
      

      {/* Bộ lọc tuần */}
      <div className="flex items-center justify-between bg-blue-500 p-4 rounded text-white">
        <button className="px-2 py-1 bg-blue-700 rounded hover:bg-blue-800">
          &lt;&lt; Tuần trước
        </button>
        <div className="bg-white text-black px-3 py-1 rounded">
          31/03/2025 - 06/04/2025
        </div>
        <button className="px-2 py-1 bg-blue-700 rounded hover:bg-blue-800">
          Tuần sau &gt;&gt;
        </button>
      </div>

      {/* Bảng lịch trực */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-center border border-gray-300">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th></th>
              <th>T2</th>
              <th>T3</th>
              <th>T4</th>
              <th>T5</th>
              <th>T6</th>
              <th>T7</th>
              <th>CN</th>
            </tr>
          </thead>
          <tbody>
            {["Sáng", "Chiều", "Tối"].map((ca) => (
              <tr key={ca} className="border-t border-white">
                <td className="bg-blue-500 text-white">{ca}</td>
                {Array.from({ length: 7 }).map((_, idx) => (
                  <td key={idx} className="h-16 bg-gray-200"></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Danh sách nhân viên chưa đủ ca */}
      <div>
        <div className="bg-blue-100 text-black px-4 py-2 rounded w-fit mb-2">
          Nhân viên chưa đủ ca trực trong tuần
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead className="bg-blue-500 text-white ">
              <tr>
                <th className="px-4 py-2">STT</th>
                <th className="px-4 py-2">Mã nhân viên</th>
                <th className="px-4 py-2">Tên</th>
              </tr>
            </thead>
            <tbody className="bg-white hover:bg-gray-300 transition text-black">
              {/* Dữ liệu mẫu */}
              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">NV01</td>
                <td className="px-4 py-2">Nguyễn Văn A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Yêu cầu đổi ca */}
      <div>
        <div className="bg-blue-100 text-black px-4 py-2 rounded w-fit mb-2">
          Yêu cầu đổi ca
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2">STT</th>
                <th className="px-4 py-2">Mã nhân viên</th>
                <th className="px-4 py-2">Tên</th>
                <th className="px-4 py-2">Ca cũ</th>
                <th className="px-4 py-2">Ca mới</th>
                <th className="px-4 py-2">Lý do thay ca</th>
              </tr>
            </thead>
            <tbody className="bg-white hover:bg-gray-300 transition text-black">
              {/* Dữ liệu mẫu */}
              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">NV02</td>
                <td className="px-4 py-2">Trần Thị B</td>
                <td className="px-4 py-2">Tối - T4</td>
                <td className="px-4 py-2">Sáng - T5</td>
                <td className="px-4 py-2">Bận việc gia đình</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Nút hành động */}
      <div className="flex gap-4 justify-end pt-4">
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          <i className="fa-solid fa-right-left"></i> Thay ca
        </button>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          <i className="fa-solid fa-plus"></i> Đăng ký ca trực
        </button>
      </div>
    </div>
  );
};

export default ShiftManagement;
