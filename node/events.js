const EventEmmiter = require('events');

const event = new EventEmmiter();


event.on('buy', (article) => {
    console.log(`${article} has been purchased`);
});

event.emit('buy', 'banana');
event.emit('buy', 'apple');