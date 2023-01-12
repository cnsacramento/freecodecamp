function seeTime(message) {
    console.log(`${new Date().toLocaleTimeString()} : ${message}`);
}

// setTimeout(seeTime, 1000, 'Bye');

// setImmediate(seeTime, 1000);

setInterval(seeTime, 1000);
