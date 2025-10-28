const db = require('../config/db');

exports.getAllCustomers = async () => {
  const [rows] = await db.execute(`
    SELECT CustomerID, FullName FROM Customer
  `);
  return rows;
};

exports.getBookingHistory = async () => {
  const [rows] = await db.execute(`
    SELECT 
      o.OrderID AS CodeBook,
      c.FullName AS CustomerName,
      o.OrderDate,
      r.RoomNumber,
      DATEDIFF(CURDATE(), o.OrderDate) AS NumberOfDays,
      o.TotalAmount,
      o.OrderDate AS CreatedDate
    FROM OrderSV o
    JOIN Customer c ON o.CustomerID = c.CustomerID
    JOIN OrderDetail od ON o.OrderID = od.OrderID
    JOIN Room r ON od.RoomID = r.RoomID
  `);
  return rows;
};
