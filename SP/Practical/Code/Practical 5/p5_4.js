const EventEmitter = require('events');
var eventEmitter = new EventEmitter();

var f1= (msg) => {
	console.log("Message from f1: " + msg);
};

var f2 = (msg) => {
	console.log("Message from f2: " + msg);
};

var f3 = (msg) => {
	console.log("Message from f3: " + msg);
};

eventEmitter.on('myEvent', f1);
eventEmitter.on('myEvent', f2);
eventEmitter.on('myEvent', f2);
//Change the execution position of listener by using prependListener
eventEmitter.prependListener('myEvent', f3);

//get name of all active listener
console.log("The name of event is: ",eventEmitter.eventNames());

//get number of listeners listening to the specified
console.log("\nNumber of listeners listening to the specified event")
console.log("No of listeners is: "+eventEmitter.listenerCount('myEvent'))

//Remove a specific listener.
eventEmitter.removeListener('myEvent', f1);
console.log("\nf1 Listener Removed");
eventEmitter.emit('myEvent', "Event occurred");

//Remove all listeners.
eventEmitter.removeAllListeners('myEvent');
console.log("\nAll Listener Removed\n");
eventEmitter.emit('myEvent', "Event occurred");

//get maximum size of listener
console.log("-----Default Maximum size of listeners-----")
console.log("Maximum size of listener is: "+eventEmitter.getMaxListeners())

//set maximum size of listener
eventEmitter.setMaxListeners(15);
console.log("-----Maximum size of listeners after bind-----")
console.log("Maximum size of listener is: "+eventEmitter.getMaxListeners())

//get name of all active listener
console.log("\n-----The name of active listeners is empty because we remove all listener-----");
console.log("The name of event is: ",eventEmitter.eventNames());

//get number of listeners listening to the specified event after remove it
console.log("\n-----Number of listeners listening to the specified event is Zero because we remove all listener-----")
console.log("No of listeners is: "+eventEmitter.listenerCount('myEvent'))