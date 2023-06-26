const mongoose = require('mongoose');

const campaignSchema = mongoose.Schema({
    //id: {type: Number, unique: true},
    id:{
        type: Number,
        required: true
      },
    name: String, 
    target: Number, 
    currentAmount: Number,
    dueDate: Date
    },{ collection: 'campaign' })

const campaign = new mongoose.model('campaign', campaignSchema);

module.exports = { campaign };
