const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection
async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log('MySQL connected');
    connection.release();
  } catch (err) {
    console.error('MySQL connection error:', err);
  }
}

testConnection();

// Routes
app.use('/api/users', require('./routes/users'));

app.use('/api/rooms', require('./routes/rooms'));
app.use('/api/orders', require('./routes/order'));
app.use('/api/employees', require('./routes/employee'));

app.use('/api/customers', require('./routes/customers'));
app.use("/api/bookings", require("./routes/booking"));

app.use("/api/invoices", require("./routes/invoice"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));