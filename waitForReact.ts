const net = require('net');
const axios = require('axios');
const port = process?.env?.PORT ? (parseInt(process.env.PORT) -100) : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({ port }, () => {
    client.end();
    if (!startedElectron) {
        console.log('starting electron');
        startedElectron = true;
        const exec = require('child_process').exec;
        exec("yarn electron");
    }
});

tryConnection();

client.on('error', (error) => {
    console.error(error);
    console.log('failed connection! Trying again in 1s...');
    setTimeout(tryConnection, 1000);
});