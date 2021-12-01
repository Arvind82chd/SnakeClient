const net = require('net');

const connect = function () {

    const conn = net.createConnection({
        host: 'localhost',
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

    return conn;
};


console.log("Connecting ...");

connect();

module.exports = { connect };