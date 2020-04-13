var events = require('events');

var eventEmitter = new events.EventEmitter();


var myEventHandler = function(){

    console.log("Event handled");

}


eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');