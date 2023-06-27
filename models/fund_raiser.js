const mongoose = require('mongoose');

const fundRaiserSchema = mongoose.Schema({
    //id: {type: String, unique: true},
    id:{
        type: String,
        required: [true, 'ID required']
      },
    name: {
      type: String,
      required: [true, 'fund raiser\'s name required']
    },
    role: {
      type: String,
      required: [true, 'role required'],
      enum: ['admin', 'fundRaiser']}, 
    target: {
      type: Number,
      required: [true, 'target amount required']
    },
    currentAmount: {
      type: Number,
      default: 0
    },
    groupId:{
      type: Number,
      required: [true, 'Group id is required']
    },
    campaignId: {
      type: Number,
      required: [true, 'Campaign id is required']
    }
    },{ collection: 'fundRaiser' })

    const fundRaiser = new mongoose.model('fundRaiser', fundRaiserSchema);


module.exports = { fundRaiser };
