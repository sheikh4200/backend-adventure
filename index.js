// 1. Import the required modules
import express from "express"
// const express = require('express');

const app = express();
const port = 4000

app.get("/",(req,res)=>{
    res.send("Hello, World!");
})
app.get("/facebook",(req,res)=>{
    res.send("Welcome to Facebook!");
})
app.get ("/youtube",(req,res)=>{
res.send("welcome to youtube")
})



// 2. Start the server 

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${port}`);
});




export {app}


