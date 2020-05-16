const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("tawoid")
})

app.listen(3003, (error) => {
    if (error) {
        console.log("ERROR RUNNING THE SERVER", error)
    }
})