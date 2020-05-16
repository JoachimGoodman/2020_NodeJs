// http://vincit.github.io/objection.js/guide/installation.html

const router = require("express").Router()

const User = require("../models/User.js")

const bcrypt = require("bcryptjs")
const saltRounds = 12

// hash a password
// bcrypt.hash("password", saltRounds).then(hash => console.log(hash))

router.post('/login', (req, res) => {
    // 1. Get the data from the request
    // 2. Validate the data
    // 3. Check if user exists and get their password
    // 4. Bcrypt compare
    // 5. Send a response based on the comparison

    /*     bcrypt.compare("password", "$2b$12$ivRBaGRMAc5VSV68QVkBsel8Im6xv6ybGZU55QTRNN8W3ufmPG8da")
    .then(result => console.log(result)); */

    return res.status(501).send({ response: "Not implemented yet" })
})

router.post('/signup', (req, res) => {

    const user = {
        username: req.body.username,
        password: req.body.password
    }

    console.log(user)

    const { username, password } = req.body;

    console.log(req.body)

    // checks if username & password were send to this
    if (username && password) {
        if (password.length < 8) {
            return res.status(400).send({ response: "Password must be 8 characters ½ longer" })
        } else {
            try {
                // finding if username already exists
                User.query().select("username").where("username", username).then(foundUser => {
                    // if returned with an none empty array
                    if (foundUser.length > 0) {
                        return res.status(400).send({ response: "User already exists" })
                    } else {
                        bcrypt.hash(password, saltRounds).then(hashedPassword => {
                            User.query().insert({
                                username,
                                password: hashedPassword
                            }).then(createdUser => {
                                return res.send({ response: `The User ${createdUser.username} was created` })
                            }).catch((error) => {
                                console.log(error)
                            })
                        })
                        // insert user into database (create new user)

                    }
                    return res.status(400).send({ response: foundUser })
                })
            } catch (error) {
                return res.status(500).send({ response: "Something went wrong with the datebase" })
            }
        }
    } else {
        return res.status(400).send({ response: "username or password missing" })
    }


})

router.post('/user', (req, res) => {

    const { username } = req.body;

    User.query().select("*").leftJoin("electives", "users.id", "electives.user_id").where("electives.user_id", username).then(foundUser => {{
        return res.send({ foundUser })
    }})

})

router.get('/logout', (req, res) => {
    return res.status(501).send({ response: users })
})

module.exports = router;