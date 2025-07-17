// day3/events.js

const EventEmitter = require('events');

// Create an emitter instance
const eventEmitter = new EventEmitter();

// Listener
eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}! Welcome to EventEmitter.`);
});

// Emit the event
eventEmitter.emit('greet', 'Rahul');

// Multiple event types
eventEmitter.on('complete', () => {
  console.log('✅ Task completed successfully.');
});

eventEmitter.emit('complete');
