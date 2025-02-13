const { User } = require('../Schema/userModel');

const userSignUp = async (req, res) => {
    res.send('Hello I am signup');
}
const userLogin=async(req,res)=>{
    res.send("Hello I am Login !")
}


module.exports = { userSignUp,userLogin };