const express = require("express")
const app = express()

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

let cars = [
    { id: 1, brand:"BMW" },
    { id: 2, brand:"Honda" }
]
let currentId = 2

app.get("/", (req, res)=>{
    return res.send({about: "info about Cars"})
})

app.get("/cars/", (req,res) => {
    return res.send({cars: cars})
})

app.get("/cars/:id", (req, res)=>{
    console.log(req.params.id)
    const car = cars.find(car => car.id == Number(req.params.id))
    return res.send({car: car})
})

app.post("/newCar", (req, res) => {
    let newCar = req.body
    newCar.id = ++currentId
    cars.push(newCar)

    console.log(newCar)

    return res.send({ response : {} })
})

app.delete("/deleteCar/:id", (req, res) => {
    cars = cars.filter(car => car.id !== Number(req.params.id))
    return res.send({ response: cars })
})

app.put("/putCar/:id", (req, res) => {
    const foundIndex = cars.findIndex(car => car.id === Number(req.params.id))
    delete req.body.id
    const updatedCar = { ...cars[foundIndex], ... req.body }
    cars[foundIndex] = updatedCar
    return res.send({ response: cars })
})

// shorthand
const PORT = process.env.PORT ? process.env.PORT : 3000
//console.log(process.env.PORT)

const server = app.listen(PORT, (error) => {
    if (error){
        console.log(error)
    }
    console.log("The Server is running at", server.address().port)
})
