var EventEmitter = require("events").EventEmitter;

var ee = new EventEmitter();

/* create listener */
ee.on("myEvent", function (arg1, arg2) {
    console.log("event has occured!");
    console.log("here are the arg1: "+arg1);
    console.log("here are the arg2: "+arg2);
});

ee.emit("myEvent","Eran","Gilboa");