const EventEmitter = require("events")

const emitter = new EventEmitter();

emitter.on("add",(a,b)=>{
    console.log("its a add callback",a,b)
})


emitter.emit("add",2,3)