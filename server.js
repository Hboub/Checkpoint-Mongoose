const express = require("express");
const app = express();
const mongoose=require('mongoose');
require("dotenv/config");
app.use(express.json());
const PORT = process.env.PORT
const usersRoute = require("./Middleware/users");
app.get("/", (req, res) => {
  res.status(200).json("We are Home");
});
app.use("/Users", usersRoute);
//connecting to data base
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},()=>{
  console.log("Connected to DB!")
});
//creating a server
app.listen(PORT, (err) => {
  err ? console.log("error") : console.log(`server is running on port ${PORT}`);
});
