// calling the lib
const express = require("express")

// instantiate 
const app = express()

            // callback function
app.get("/", (req, res) => {
    const response = {
        message: "hi",
        assignment: 2
    }
    res.send(response)
})

app.get("/aboutMe", (req, res) => {
    const response = {
        aboutMe: "i am joachim"
    }
    res.send(response)
})

// this listen on PORT 3000
app.listen(3000, (error) => {
    if (error) {
        console.log("ERROR RUNNING THE SERVER", error)
    }
    console.log("Server is running on port", 3000)
})