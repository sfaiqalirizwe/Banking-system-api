
const express = require("express");
const router = require("./routes/authroute");
const cookieParser = require("cookie-parser");
const accountRouter = require("./routes/accountroute");

const app = express();
app.use(express.json());

app.use(cookieParser());




app.use("/api/auth", router);
app.use("/api/accounts", accountRouter);

app.get("/", (req, res) => {
    res.send("Banking System API is running");
});



module.exports = app;
