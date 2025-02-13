const mongoose=require('mongoose');
const url = 'mongodb://localhost:27017/nuroflexmat';
const dbConnection=async()=>{
    try {
        await mongoose.connect(url);
        console.log("MongoDB connected!");
    } catch (error) {
        console.log(error.message);
        
    }
}
module.exports=dbConnection;