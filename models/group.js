const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    //id: {type: Number, unique: true},
    id:{
        type: Number,
        required: true
      },
    name: String, 
    target: Number, 
    currentAmount: Number,
    campaignId: Number
    },{ collection: 'group' })

const group = new mongoose.model('group', groupSchema);

module.exports = { group };
