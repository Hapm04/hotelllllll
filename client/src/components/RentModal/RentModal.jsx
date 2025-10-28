import { useEffect, useState } from "react";
import axios from "axios";

const RentModal = ({ room, onClose }) => {
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [roomDetails, setRoomDetails] = useState({});
  const [apiResponse, setApiResponse] = useState(null); // Thêm state để lưu toàn bộ response

  useEffect(() => {
    // Đảm bảo room object có tồn tại
    if (room) {
      // Sử dụng RoomID thay vì id
      const roomId = room.RoomID || room.id; // Linh hoạt để xử lý cả hai trường hợp

      if (roomId) {
        console.log(`Đang gọi API với roomId: ${roomId}`);
        
        // Gọi API để lấy thông tin khách hàng và phòng
        axios
          .get(`http://localhost:5000/api/orders/current/${roomId}`)
          .then((res) => {
            console.log("Dữ liệu nhận được từ API:", res.data);
            setApiResponse(res.data); // Lưu toàn bộ response để debug
            
            // Kiểm tra cấu trúc dữ liệu và gán giá trị
            if (res.data) {
              // Truy cập trực tiếp vào thuộc tính customerName
              if (res.data.customerName) {
                setCustomerName(res.data.customerName);
              } 
              // Hoặc nếu customerName nằm trong một object con
              else if (res.data.customer && res.data.customer.FullName) {
                setCustomerName(res.data.customer.FullName);
              }
              
              // Lưu thông tin phòng từ API
              setRoomDetails({
                id: res.data.RoomID,
                price: res.data.Price,
                type: res.data.Type
              });
            }
          })
          .catch((err) => {
            console.error("Lỗi khi tải thông tin khách:", err);
          });
      } else {
        // Reset state khi không có roomId
        setCustomerName("");
        setCustomerAddress("");
        setApiResponse(null);
        
        // Lưu thông tin phòng từ prop
        setRoomDetails({
          id: roomId,
          price: room.Price || room.price,
          type: room.Type || room.type
        });
      }
    }
  }, [room]);

  // Định dạng ngày hiện tại theo yyyy-mm-dd
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Định dạng giờ hiện tại theo HH:MM
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-gray-100 rounded-xl w-[500px] relative overflow-hidden shadow-lg">

        {/* Header */}
        <div className="bg-blue-600 text-white flex justify-between items-center px-6 py-4">
          <h2 className="font-bold text-xl">Thuê phòng</h2>
          <button
            onClick={onClose}
            className="bg-black hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        {/* Debug Info - Chỉ hiển thị trong quá trình phát triển */}
        

        {/* Form body */}
        <div className="p-6 text-sm text-gray-700">
          <div className="grid grid-cols-2 gap-3 font-bold">
            <label>
              Thuê phòng:
              <input
                value={roomDetails.id || ''}
                className="w-full border px-2 py-1 rounded text-black font-normal"
                disabled
              />
            </label>
            <label>
              Giá:
              <input
                value={(roomDetails.price ? roomDetails.price.toLocaleString() : '0') + " VND"}
                className="w-full border px-2 py-1 rounded text-black font-normal"
                disabled
              />
            </label>
            <label>
              Ngày vào:
              <input 
                type="date" 
                defaultValue={getCurrentDate()}
                className="w-full border px-2 py-1 rounded text-black font-normal" 
              />
            </label>
            <label>
              Lúc:
              <input 
                type="time" 
                defaultValue={getCurrentTime()}
                className="w-full border px-2 py-1 rounded text-black font-normal" 
              />
            </label>
            <label className="col-span-2">
              Tên khách hàng:
              <input
                className="w-full border px-2 py-1 rounded text-black font-normal"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </label>
            <label className="col-span-2">
              Địa chỉ:
              <input
                className="w-full border px-2 py-1 rounded text-black font-normal"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
              />
            </label>
            <label>
              Số ngày định ở:
              <input className="w-full border px-2 py-1 rounded text-black font-normal" />
            </label>
            <label>
              CMND/Passport:
              <input className="w-full border px-2 py-1 rounded text-black font-normal" />
            </label>
            <label className="col-span-2">
              Ghi chú:
              <textarea className="w-full border px-2 py-1 rounded text-black font-normal" rows="3" />
            </label>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button onClick={onClose} className="bg-red-400 text-white px-4 py-1 rounded">
              Hủy
            </button>
            <button className="bg-green-500 text-white px-4 py-1 rounded">Thuê phòng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentModal;