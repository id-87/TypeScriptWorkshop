"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var appInstance = new app_1.App();
appInstance.app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
