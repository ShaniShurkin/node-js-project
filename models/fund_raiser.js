const mongoose = require('mongoose');

const fundRaiserSchema = mongoose.Schema({
    id: String,
    name: String, 
    target: Number, 
    currentAmount: Number
    },{ collection: 'fundRaiser' })

const fundRaiser = new mongoose.model('fundRaiser', fundRaiserSchema);

module.exports = { fundRaiser };
