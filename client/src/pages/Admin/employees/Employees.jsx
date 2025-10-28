import React, { useEffect, useState } from "react";
import axios from "axios";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchPosition, setSearchPosition] = useState("");
  const [searchBranch, setSearchBranch] = useState("");

  const [selectedEmployees, setSelectedEmployees] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/employees");
        setEmployees(res.data);
        setFilteredEmployees(res.data); // initialize
      } catch (err) {
        console.error("Lỗi khi lấy danh sách nhân viên:", err);
      }
    };

    fetchEmployees();
  }, []);

  // ✅ Filter realtime
  useEffect(() => {
    const filtered = employees.filter((emp) => {
      return (
        emp.FullName.toLowerCase().includes(searchName.toLowerCase()) &&
        emp.Position.toLowerCase().includes(searchPosition.toLowerCase()) &&
        emp.BranchID.toString().includes(searchBranch)
      );
    });
    setFilteredEmployees(filtered);
  }, [searchName, searchPosition, searchBranch, employees]);

  const openModal = (employee) => setSelectedEmployees(employee);
  const closeModal = () => setSelectedEmployees(null);

  return (
    <div className="p-6 text-black">
      <h2 className="text-2xl font-bold mb-4">Danh sách nhân viên</h2>

      {/* 🔍 Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Tìm theo tên nhân viên"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Tìm theo vị trí"
          value={searchPosition}
          onChange={(e) => setSearchPosition(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Tìm theo mã chi nhánh"
          value={searchBranch}
          onChange={(e) => setSearchBranch(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">STT</th>
              <th className="px-4 py-2">Mã NV</th>
              <th className="px-4 py-2">Tên</th>
              <th className="px-4 py-2">SĐT</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Vị trí</th>
              <th className="px-4 py-2">Chi nhánh</th>
              <th className="px-4 py-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp, index) => (
                <tr key={emp.EmployeeID} className="border-b text-center text-black">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{emp.EmployeeID}</td>
                  <td className="px-4 py-2">{emp.FullName}</td>
                  <td className="px-4 py-2">{emp.Phone}</td>
                  <td className="px-4 py-2">{emp.Email}</td>
                  <td className="px-4 py-2">{emp.Position}</td>
                  <td className="px-4 py-2">{emp.BranchID}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => openModal(emp)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Chi tiết
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  Không có nhân viên nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal nếu có */}
      {/* {selectedEmployees && <EmployeeModal employee={selectedEmployees} onClose={closeModal} />} */}
    </div>
  );
};

export default Employees;
