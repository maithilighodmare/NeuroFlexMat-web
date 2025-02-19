const express = require('express');
const app = express();
const dbConnection = require('./Dbconnection/dbConnection');
const routes = require('./Routes/route'); // ✅ Corrected import

app.use(express.json()); // ✅ Move this above routes
app.use('/user', routes); // ✅ Use without destructuring

// Connect to DB properly
dbConnection()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection failed:', err));

app.get('/', (req, res) => {
    res.send('How are you..');
});

app.listen(4000, () => {
    console.log("Server is running on port 4000...");
});
