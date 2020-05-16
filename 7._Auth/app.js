const express = require('express')
const app = express()

app.use(express.json())

const session = require('express-session')

/* SESSIONS -------------------------------------------------------------------------------------------------------------------- */
const config = require("./config/config.json")
app.use(session({
    secret: "fiskeoliepiller",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

/* LIMITS THE AMOUNT OF REQUESTS YOU CAN MAKE -------------------------------------------------------------------------------------------------------------------- */
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //min, seconds, milliseconds = total 15min
    max: 100 // limit each ip to 100 requests per windowsMs
})

app.use(limiter)

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, //min, seconds, milliseconds = total 15min
    max: 8 // limit each ip to 8 requests per windowsMs
})

app.use("/signup", authLimiter)
app.use("/login", authLimiter)

/* Setup Knex with Objection  -------------------------------------------------------------------------------------------------------------------- */

const { Model } = require('objection')
const Knex = require('knex')
const knexfile = require('./knexfile.js')

const knex = Knex(knexfile.development)

Model.knex(knex)

/* Gives us the current time */
// app.use((req, res, next) => {
//     console.log("Time of request: ", new Date())
//     next()
// })

/* Setup the routes with app */
const authRoute = require('./routes/auth.js')
const usersRoute = require('./routes/users.js')

app.use(express.static('public'))
app.use(authRoute);
app.use(usersRoute);

const fs = require("fs")

const navbarPage = fs.readFileSync("./public/includes/navbar.html", "utf8")
const footerPage = fs.readFileSync("./public/includes/footer.html", "utf8")
const frontPage = fs.readFileSync("./public/pages/frontpage.html", "utf8")
const login = fs.readFileSync("./public/pages/login.html", "utf8")
const signup = fs.readFileSync("./public/pages/signup.html", "utf8")


app.get("/", (req, res) => {
    return res.send(navbarPage + frontPage + footerPage)
})

app.get("/login", (req, res) => {
    return res.send(navbarPage + login + footerPage)
})

app.get("/signup", (req, res) => {
    return res.send(navbarPage + signup + footerPage)
})

const port = 3000

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server")
    }
    console.log("This server is running on port", server.address().port)
});
