const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {

    const conn = net.createConnection({
        host: IP,
        port: PORT
    });

    conn.setEncoding("utf8");
    
    conn.on('data', (data) => {
        console.log('Server Says: ',data);
    });

    conn.on('connect', () => {
        conn.write("Successfully connected to game server");
    });

    conn.on('connect', () => {
        conn.write(`"Name: ASH"`);
    });

    conn.on('connect', () => {
        conn.write("Say: Hello Everyone this is Arvind");
    });
    // conn.on("connect", () => {
    //     setInterval(() => {
    //         conn.write("Move: up");    
    //     }, 50);
        
    // });

    // conn.on('connect', () => {
    //     setTimeout(() => {
    //         conn.write("Move: right");
    //     }, 50);
       
    // });

    // conn.on('connect', () => {
    //     setTimeout(() => {
    //         conn.write("Move: down");
    //     }, 100);

    // });

    // conn.on('connect', () => { setTimeout(() => {
    //     conn.write("Move: left");
    // }, 150);
        
    // });

    return conn;
};






module.exports = { connect };