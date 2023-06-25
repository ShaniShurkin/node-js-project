const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    id: {type: Number, unique: true},
    fundRaiserId:String,
    donorName:String,
    amount: Number,
    dedication: String,
    groupId:Number,
    campaignId: Number,
    time: Date
    },{ collection: 'donation' })

const donation = new mongoose.model('donation', donationSchema);

module.exports = { donation };
