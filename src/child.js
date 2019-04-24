const addon = require('@cc/findhasp');

process.on('message', (msg) => {
    console.log('message from parent:', msg);
});

// setInterval(() => {
//     const hasp = addon.findHasp();
//     process.send({hasp});
// }, 2000);
