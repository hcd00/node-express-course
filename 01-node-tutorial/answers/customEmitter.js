//Emitter
const EventEmitter = require("events");  
const emitter = new EventEmitter();  
setInterval(() => {  
  emitter.emit("timer", "hi there");  
}, 2000);  
emitter.on("timer", (msg) => console.log(msg));

const emitter1 = new EventEmitter()

const waitForEvent = () => {
    return new Promise((resolve) => {
        emitter1.on("happens", (msg) => resolve(msg));
    });
};
const doWait = async () => {
    const msg = await waitForEvent();
    console.log("Event! : ", msg);
};
doWait();
emitter1.emit("happens", "Hello World!");