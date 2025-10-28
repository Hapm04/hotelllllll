import { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "../../../components/RoomCard";
import RentModal from "../../../components/RentModal";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rooms");
        setRooms(res.data);
      } catch (err) {
        console.error("Lỗi khi lấy danh sách phòng:", err);
      }
    };

    fetchRooms();
  }, []);

  const openModal = (room) => setSelectedRoom(room);
  const closeModal = () => setSelectedRoom(null);

  return (
    <div className="p-4 space-y-6">
      {/* Bộ lọc */}
      <div className="bg-blue-500 p-4 rounded-xl flex gap-4 flex-wrap items-center text-white">
        <label>
          Tầng <input type="text" className="ml-1 rounded px-2 text-black bg-white" />
        </label>
        <label>
          Trạng thái phòng <input type="text" className="ml-1 rounded px-2 text-black bg-white" />
        </label>
        <label>
          Loại phòng <input type="text" className="ml-1 rounded px-2 text-black bg-white" />
        </label>
      </div>

      {/* Danh sách phòng */}
      <div className="grid grid-cols-4 gap-4">
        {rooms.map((room) => (
          <RoomCard key={room.RoomNumber} room={room} onClick={() => openModal(room)} />
        ))}
      </div>

      {/* Modal thuê phòng */}
      {selectedRoom && <RentModal room={selectedRoom} onClose={closeModal} />}
    </div>
  );
};

export default Home;
