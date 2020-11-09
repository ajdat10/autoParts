const Dealer = require('../models/dealer');

const GetDealers = async(req, res) => {
    try {
        const dealers = await Dealer.find();
        res.send(dealers)
    } catch (err) {
        throw err
    }
}

module.exports = {
    GetDealers,
} 