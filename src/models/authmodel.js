const mongoose = require ("mongoose");

const authSchema = new mongoose.Schema({
    email:{
        type: "string",
        required: true,
        unique:true,
        trim:true,
        lowercase:true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"],

    },
    password:{
        type:"string",
        required: true,
        trim:true,
    },
    name:{
        type:"string",
        required: true,
        trim:true,
    }
},{
    timestamps:true,
});
module.exports = mongoose.model("Auth", authSchema);