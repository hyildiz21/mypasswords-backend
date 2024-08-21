const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); //response values are json format 
app.use("/api/passwords", require("./routes/passwordRoutes"));

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});
