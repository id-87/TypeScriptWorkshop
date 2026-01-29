// const exp=require('express')
const application=require('./server')

interface App_Interface{
    startServer():void
    connectDB():void
    initializeRoutes():void;
}

class App implements App_Interface{
    port:number
    app:Express.Application

    constructor(){
        this.port=4000
        this.app=application
    }
    startServer(): void {
        
    }
    connectDB(): void {
        
    }
    initializeRoutes(): void {
        
    }
}
