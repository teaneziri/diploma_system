require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const sequelize = require('./config/database.js');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoute.js');
app.use('/api/auth', authRoutes);

// Test DB connection and start server
sequelize.authenticate()
  .then(() => {
    console.log('Connected to DB');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('DB connection failed:', err);
  });
