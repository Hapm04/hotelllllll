const EmployeeModel = require('../models/employeeModel');

const getEmployees = async (req, res) => {
  try {
    const employees = await EmployeeModel .getAllEmployees();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getEmployees };
