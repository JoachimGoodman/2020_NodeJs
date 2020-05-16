const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(express.json()) // parse application/json

app.use(express.static('public'))
app.use(express.static('videos'))

const header = fs.readFileSync('./public/navbar/navbar.html', 'utf8')
const player = fs.readFileSync('./public/player/player.html', 'utf8')
const frontpage = fs.readFileSync('./public/frontpage/frontpage.html', 'utf8')
const footer = fs.readFileSync('./public/footer/footer.html', 'utf8')
const uploadPage = fs.readFileSync("./public/upload/upload.html", "utf8")

app.get("/", (req, res) => {
    return res.send(header + frontpage + footer)
})

app.get("/player/:videoId", (req, res) => {
    return res.send(header + player + footer)
})

app.get("/upload", (req, res) => {
    return res.send(header + uploadPage + footer)
})

// import routes
const videosRoute = require("./routes/videos")

app.use(videosRoute)


const PORT = process.env.PORT ? process.env.PORT : 3000

const server = app.listen(PORT, (error) => {
    if (error){
        console.log(error)
    }
    console.log("The Server is running at", server.address().port)
})