const db = require("../config/db");

// Truy vấn thông tin khách hàng đang sử dụng phòng
exports.getCurrentCustomerByRoomId = async (roomId) => {
  const [rows] = await db.execute(`
    SELECT 
        c.FullName AS customerName,
        r.RoomID, r.Price, r.Type 
      FROM Customer c
      JOIN OrderSV o ON c.CustomerID = o.CustomerID
      JOIN OrderDetail od ON od.OrderID = o.OrderID
      JOIN Room r ON r.RoomID = od.RoomID
      WHERE r.RoomID = ? 
  `, [roomId]); 

  return rows[0]; // Nếu có thì trả về 1 khách
};
