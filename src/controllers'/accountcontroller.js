// const Account = require("../models/accountmodel.js");

// const createuserAccount = async (req,res)=>{
//     const user = req.user;
//     try {
//         const userAccount = await Account.create({
//             user: user._id,
            
//         });
//         res.status(201).json({
//             userAccount,
//         });
//     } catch (error) {
//         console.error("Error creating user account:", error.message);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// }

// module.exports = {
//     createuserAccount
// }

const Account = require("../models/accountmodel.js");

const createuserAccount = async (req, res) => {
    try {
        const user = req.user;

        // Check karo ke user login hai ya nahi
        if (!user || !user._id) {
            return res.status(401).json({
                message: "User not authenticated"
            });
        }

        const userAccount = await Account.create({
            user: user._id
        });

        return res.status(201).json({
            message: "Account created successfully",
            userAccount
        });

    } catch (error) {
        console.error("Error creating user account:", error.message);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

module.exports = { createuserAccount };