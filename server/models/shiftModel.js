const db = require("../config/db");

exports.getShiftSchedule = () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT sa.ShiftID, s.TimeSlot, s.DayOfWeek, e.EmployeeID, e.Name 
      FROM ShiftAssignment sa
      JOIN Shift s ON sa.ShiftID = s.ShiftID
      JOIN Employee e ON sa.EmployeeID = e.EmployeeID
    `;
    db.query(query, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

exports.getIncompleteShiftEmployees = () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT e.EmployeeID, e.Name
      FROM Employee e
      LEFT JOIN (
        SELECT sa.EmployeeID, COUNT(*) as shifts
        FROM ShiftAssignment sa
        GROUP BY sa.EmployeeID
      ) sa ON e.EmployeeID = sa.EmployeeID
      WHERE IFNULL(sa.shifts, 0) < 5
    `;
    db.query(query, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

exports.getShiftChangeRequests = () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT scr.EmployeeID, e.Name, scr.OldShift, scr.NewShift, scr.Reason
      FROM ShiftChangeRequest scr
      JOIN Employee e ON scr.EmployeeID = e.EmployeeID
    `;
    db.query(query, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
