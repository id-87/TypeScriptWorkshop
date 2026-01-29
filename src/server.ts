import express from 'express'
import {App} from './app'
let app=new App().app;
app = express();

// app.get('/',(req,res)=>{
//     res.send("Healthy")
// })
app.listen(3000,()=>{
    console.log("Server is running")
})
