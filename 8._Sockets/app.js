const app = require("express")()
const server = require('http').createServer(app)

const io = require('socket.io')(server)

const escape = require('escape-html')

// Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
const helmet = require('helmet')
app.use(helmet())

io.on('connection', (socket) => {
    console.log("socket joined: ", socket.id)

    socket.on("I'm thinking about this", ({ thoughts }) => {
        console.log(thoughts)

        // sends to all sockets
        io.emit("Someone said", { thoughts: escape(thoughts) })

        // sends only to itself
        // socket.emit("Someone said", { thoughts})

        // sends to all clients but itself
        // socket.broadcast.emit("Someone said", { thoughts })

    })

    // socket.on('disconnect', () => {
    //     console.log("Socket left", socket.id)
    // })
})

app.get('/', (req, res) => {
    return res.sendFile(__dirname + "/index.html")
})


server.listen(3000)