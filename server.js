const express=require("express")
const colors=require("colors");
const connectDB=require("./config/db")
const dotenv=require("dotenv").config();

connectDB()
// rest object
const app=express();
const port=process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send({message:"Welcome to Node js"})
})
app.listen(port,()=>{
    console.log("App is running in 4000 port".bgGreen)
})