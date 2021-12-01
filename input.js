let connection;

const setupInput = function(conn) {

    connection = conn; // to accept an object that lets interaction with server
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    
    const handleUserInput = function() {
        stdin.on("data", (key) => {
            process.stdout.write('.');
            if (key === '\u0003') {
                process.exit();
            }

            else if (key === 'w') {
               setTimeout(() => {
                connection.write("Move: up");    
               }, 50);
                   
               
            }

            else if (key === 'a') {
                setTimeout(() => {
                    connection.write("Move: left");
                }, 50);
                    
        
            }

            else if (key === 's') {
                setTimeout(() => {
                    connection.write("Move: down");
                }, 50);
                  
              
 
            }

            else if (key === 'd') {
                setTimeout(() => {
                    connection.write("Move: right");
                }, 50)
                    
              

            }
        });
        
        // conn.on("connect", () => {
        //         setInterval(() => {
        //             conn.write("Move: up");    
        //         }, 50);
                
        //     });

    }

    stdin.on("data",  handleUserInput);
    
    return stdin;
};



module.exports = { setupInput };