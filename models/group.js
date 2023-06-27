const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    //id: {type: Number, unique: true},
    id:{
        type: Number,
        required: true
      },
    name: {
      type: String,
      required: [true, 'Group name is required']
    }, 
    target: {
      type: Number,
      required: [true, 'Terget is required']
    }, 
    currentAmount:  {
      type: Number,
      default: 0
    },
    campaignId:{
      type: Number,
      required: [true, 'Campaign id is required']
    }
    },{ collection: 'group' })

const group = new mongoose.model('group', groupSchema);

module.exports = { group };
