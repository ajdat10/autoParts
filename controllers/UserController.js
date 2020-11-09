const User = require ('../models/user')
const Car = require ('../models/car')

const GetUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        throw err
    }
}