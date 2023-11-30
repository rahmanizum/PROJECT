require('dotenv').config();

const express = require("express");
const sequelize = require("./utils/database");
const cors = require("cors");

// console.log(process.env.SCHEMA);
// console.log(process.env.USER);
// console.log(process.env.PASSWORD);
// console.log(process.env.HOST_NAME)

const mainRoute = require("./routes/main");
const userRoute = require("./routes/user");


const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use("/user",userRoute);
app.use("/", mainRoute);


sequelize.sync().then((result)=>{
    
    app.listen(process.env.PORT);
    console.log(`Server running on port ${process.env.PORT}`);
}).catch(e=>{
    console.log(e);
})