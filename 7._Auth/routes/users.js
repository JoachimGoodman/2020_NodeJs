const router = require('express').Router();

const User = require('../models/User.js');

router.get('/users', async (req, res) => {
    const allUsersWithElectives = await User.query().select("*").withGraphFetched('electives');
    return res.send({ response: allUsersWithElectives });
});

router.get('/setsessionvalue', (req, res) => {
    req.session.payingAttention = true
    return res.send({ response: "OK" })
})

router.get('/getsessionvalue', (req, res) => {
    return res.send({ response: req.session })
})

// assignment
// router.get("/test/:something", (req, res) => {
//     // todo: dynamically pass data to this endpoint and console log it
//     console.log(req.params.something)
//     return res.send({test: req.params.something})
// })

module.exports = router;