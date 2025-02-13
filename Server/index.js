let express = require('express');
const app = express();
const dbConnection = require('./Dbconnection/dbConnection');
const { User } = require('./Schema/userModel');
const {routes}=require('./Routes/route');

app.use('/user',routes);

dbConnection();
app.use(express.json());



app.get('/', (req, res) => {
    res.send('How are you..')
})

app.listen('4000', () => {
    console.log("Server is running....");
})