// const exp=require('express')
// const application=require('./server')
import express from 'express'

interface App_Interface{
    startServer():void
    connectDB():void
    initializeRoutes():void;
}

export class App implements App_Interface{
    port:number
    app:express.Application

    constructor(){
        this.port=4000
        this.app=express()
        this.startServer()
    }
    startServer(): void {
        this.app.listen(this.port,()=>{
            console.log("Server started")
        })
        
    }
    connectDB(): void {
        
    }
    initializeRoutes(): void {
        
    }
}


// module.exports=App