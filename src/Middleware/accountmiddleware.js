const authSchema = require("../models/authmodel");
const jwt = require("jsonwebtoken");


const createAccount = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    try{
        if(!token){
            return res.status(401).json({
                message:"Unauthorized"
            })
        }

        const decoded =jwt.verify(token, process.env.jwt_secret);
        // const user = await authSchema.findbyid(decoded.userid) 
           const user = await authSchema.findById(decoded.userId) 

       req.user = user;
         return next();
    }
      

    catch(error){
        console.error("Error in account middleware:", error.message);
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}
module.exports = {
    createAccount
}