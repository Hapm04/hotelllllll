const statusColors = {
  "Trống": "bg-green-600",
  "Đang sử dụng": "bg-red-600",
  "Đang dọn dẹp": "bg-yellow-400",
};

const RoomCard = ({ room, onClick }) => {
  return (
    <div
      className={`p-4 rounded-xl cursor-pointer text-center text-sm shadow-md ${statusColors[room.Status] || "bg-yellow-500"}`}
      onClick={onClick}
    >
      <div className="font-bold">Phòng {room.RoomNumber}</div>
      <div>{room.type}</div>
      <div className="mt-2 text-xs">{room.Status}</div>
      <div className="mt-1 text-xs">{room.Price?.toLocaleString()} VND</div>
    </div>
  );
};

export default RoomCard;
