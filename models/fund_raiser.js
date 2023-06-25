const mongoose = require('mongoose');

const fundRaiserSchema = mongoose.Schema({
    id: {type: String, unique: true},
    name: String, 
    target: Number, 
    currentAmount: Number,
    groupId:Number,
    campaignId: Number
    },{ collection: 'fundRaiser' })

    const fundRaiser = new mongoose.model('fundRaiser', fundRaiserSchema);


module.exports = { fundRaiser };
