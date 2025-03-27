const os = require("os");
console.log("User Info: ", os.userInfo())
//System uptime in s
console.log("Uptime: ", os.uptime());
console.log('os arch: ', os.arch());
console.log('os cpus: ',os.cpus());