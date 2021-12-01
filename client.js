const net = require('net');

const connect = function () {

    const conn = net.createConnection({
        host: '165.227.47.243',
        port: 50541
    });

    conn.setEncoding("utf8");
    
    conn.on('data', (data) => {
        console.log('Server Says: ',data);
    });

    conn.on('connect', () => {
        conn.write("Successfully connected to game server");
    });

    conn.on('connect', () => {
        conn.write("Name: ASH");
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