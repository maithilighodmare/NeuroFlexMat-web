const express = require('express');
const cors = require('cors');
const dbConnection = require('./Dbconnection/dbConnection');
const routes = require('./Routes/route'); // ✅ Correct path to your routes

const app = express();
const PORT = 4000;

// ✅ Middleware
app.use(cors({
  origin: 'http://localhost:5173', // ✅ Match your frontend origin exactly
  credentials: true, // Optional: Needed if you're sending cookies
}));
app.use(express.json()); // For parsing JSON request bodies

// ✅ Routes
app.use('/user', routes);

// ✅ Root Route (optional)
app.get('/', (req, res) => {
  res.send('Server is running! ✅');
});

// ✅ Connect to Database
dbConnection()
  .then(() => {
    console.log('✅ Database connected successfully');
    // Start server after DB is connected
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
  });
