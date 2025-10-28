const db = require('../config/db');

exports.getAllInvoices = async () => {
  const query = `
    SELECT 
      i.InvoiceID AS id,
      r.RoomNumber AS room,
      c.FullName AS customer,
      i.InvoiceDate AS createdAt,
      e.FullName AS creator,
      i.TotalAmount AS total,
      i.PaymentStatus AS status,
      b.BranchName AS branch
    FROM Invoice i
    JOIN OrderSV o ON i.OrderID = o.OrderID
    JOIN Customer c ON o.CustomerID = c.CustomerID
    JOIN Employee e ON o.EmployeeID = e.EmployeeID
    LEFT JOIN OrderDetail od ON od.OrderID = o.OrderID
    LEFT JOIN Room r ON od.RoomID = r.RoomID
    JOIN Branch b ON r.BranchID = b.BranchID
  `;
  const [rows] = await db.query(query);
  return rows;
};
