require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const Routes = require("./Routes/gallery")

const cors = require("cors");

//PORT
const port = process.env.PORT||5000;

//DB Connection
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("DB Connected");
})
.catch((error)=>{
    console.log(error);
})

//Middlewares
app.use(bodyParser.json());
app.use(cors());


//My routes
app.use("/api",Routes);



app.listen(port,()=>{
    console.log("we are live at "+port)
})