"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
// const exp=require('express')
// const application=require('./server')
var express_1 = require("express");
var App = /** @class */ (function () {
    function App() {
        this.port = 4000;
        this.app = (0, express_1.default)();
        this.startServer();
    }
    App.prototype.startServer = function () {
        this.app.listen(this.port, function () {
            console.log("Server started");
        });
    };
    App.prototype.connectDB = function () {
    };
    App.prototype.initializeRoutes = function () {
    };
    return App;
}());
exports.App = App;
// module.exports=App
