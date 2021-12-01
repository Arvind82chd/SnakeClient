

const setupInput = function() {
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