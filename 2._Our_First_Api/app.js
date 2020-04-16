// calling the lib
const express = require("express")
const request = require("request")

// instantiate 
const app = express()
// const request = require()

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

const daysArray = ["monday", "tuesday", "wednesday", "Thursday", "Freday", "saturday", "sunday"]

app.get("/time", (req, res) => {
    let current = new Date()
    const response = {
        day: daysArray[current.getDay() - 1],
        hour: current.getHours(),
        minute: current.getMinutes(),
        seconds: current.getSeconds(),
        milliseconds: current.getMilliseconds(),
        weather: "sunny"
    }
    res.send(response)
})

// create a get route on /users. (:id this means dynamic variable)
app.get("/users/:id", (req, res) => {
    const people = [{id: 0, name: "people0"}, {id: 1, name: "people1"}]
    //console.log(req.params)
    //console.log(req.params.name)
    // for (i = 0; i < people.length; i++) {
    //     // console.log("forlooop", people[i].id)
    //     if (people[i].id == req.params.id) {
    //         let person = people[req.params.id]
    //         // console.log(req.params.id)
    //         return res.send(person)
    //     }
    // }
    return res.send(people.find(req.params))
})

// get the query string
app.get("/search", (req, res) => {
    res.send(req.query)
})


// create a get route on /google. this is a proxy server
app.get("/google", (req, res) => {
    request('http://www.google.com', (error, response, body) => {
        console.error('error:', error) // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
        console.log('body:', body) // Print the HTML for the Google homepage.
        return res.send(body)
    })
})

// get a file from public folder. ___dirname to get to the folder that node is running from
app.get("/documentationone", (req, res) => {
    //return res.redirect("documentationtwo")
    return res.sendFile(__dirname + "/public/documentationone.html")
})

app.get("/documentationtwo", (req, res) => {
    return res.sendFile(__dirname + "/public/documentationTwo.html")
})

// this listen on PORT 3000
app.listen(3000, (error) => {
    if (error) {
        console.log("ERROR RUNNING THE SERVER", error)
    }
    console.log("Server is running on port", 3000)
})