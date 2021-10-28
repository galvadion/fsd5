const cowsay = require('cowsay')

const http = require('http')

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-type","text/html");
    res.end(`<h1> ${cowsay.say({
        text: 'Soy una prueba',
        e: '-.-',
        T: 'U'
    })}</h1>`)
})

server.listen(4000, () => {
    console.log("Esta corriendo")
})