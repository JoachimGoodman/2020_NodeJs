
const express = require("express");


const app = express();
let cars = [
    { id: 1, brand: "Mercedes"},
    { id: 2, brand: "BMW"}
];

app.get("/",(req, res) => {
    return res.send({ about: "Car API version 0.0.1"});
    
})
app.get("/cars/",(req,res) => {
    return res.send({cars: cars})
})
    

app.get("/cars/:id/",(req,res) => {
    console.log(req.params.id);
   const car = cars.find(car => car.id == Number(req.params.id));
    return res.send({car: car});
})
     

const PORT = 3000;
const server = app.listen(PORT, (error) => {
    if(error){
        console.log("Error starting the server");
    }
    console.log("This server is running on port", PORT );
});