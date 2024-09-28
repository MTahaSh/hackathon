require("dotenv").config();
const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")
const mongoose = require("mongoose");
const { timeStamp } = require("console");
const userRouter = require("./routes/user");
const connectMongoDb = require("./connect");

const app = express();

const PORT = process.env.PORT ||  8000;



// connectMongoDb(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL).then(
    ()=> console.log("Connected to database")
).catch(err => console.log("Mongo Error: ", err))


app.use(express.urlencoded({extended:false}))

app.use((req,res,next)=>{
    fs.appendFile("log.txt", `\n${Date.now()}: ${req.method}: ${req.path}`, (err, data)=> {
        next(); 
    })
})


app.use("/api/user",userRouter);


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)})