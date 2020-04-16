/*
Requirements:
    Serve the pages with Express
    Split up the documentation in segments rather than one long page
    Use jQuery to make it a nicer user experience
    Should contain commands
    Should contain code snippets
    Should contain all the tools we’ve used and explain them
    Should cover theory that we’ve touched upon
 */

const express = require("express")
const app = express()

// app.use(express.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
// app.use(express.json()) // parse application/json

app.use(express.static('public'))

app.get("/:page", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html")
})

app.get("/data/:elementData", (req, res) => {
    const data = require('./public/database.json')
    if(data[req.params.elementData] !== undefined) {
        return res.send(data[req.params.elementData].subsites)
    }
    return res.send()
})

// listener
const PORT = process.env.PORT ? process.env.PORT : 3001
const server = app.listen(PORT, (error) => {
    if (error){
        console.log(error)
    }
    console.log("The Server is running at", server.address().port)
})
