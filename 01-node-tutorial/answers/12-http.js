const {createServer} = require('http')

//request, response
const server = createServer((req,res) => {
    res.write('Welcome to landing page!')
    res.end();
})

server.listen(3000);