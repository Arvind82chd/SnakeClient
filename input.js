let connection;

const setupInput = function(conn) {

    connection = conn; // to accept an object that lets interaction with server
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    
    const handleUserInput = function() {
        stdin.on("data", (key) => { 
            setTimeout(() => {
            if (key === '\u0003') {
                process.exit();
                
            } else if (key === 'w') {  
                connection.write("Move: up");    
            } else if (key === 'a') {
                connection.write("Move: left");
            } else if (key === 's') {
                connection.write("Move: down");
            } else if (key === 'd') {
              connection.write("Move: right");
            } 

            }, 50);
            
        });

    }

    stdin.on("data",  handleUserInput);
    
    return stdin;
};



module.exports = { setupInput };