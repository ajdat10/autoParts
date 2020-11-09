const Car = require('../models/car')

const GetCars = async (req, resp) => {
        try {
            const cars = await Car.find();
            res.send(cars)
        } catch (err) {
            throw err
        }
    }
    
    module.exports = {
        GetCars,
    } 
