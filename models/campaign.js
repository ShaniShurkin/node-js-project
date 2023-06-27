const mongoose = require('mongoose');
const id = 1;
const campaignSchema = mongoose.Schema({
    id:{
        type: Number,
        required: [true, "ID is required"]
      },
    name:{
      type: String,
      required: [true, "Campaign name is required"]
    }, 
    target: {
      type: Number,
      required: [true, 'Target is required']
    },
    currentAmount: {
      type: Number,
      default: 0
    },
    dueDate:{
      type: Date,
      required: [true, 'Date is required']
    }
    },{ collection: 'campaign' })

const campaign = new mongoose.model('campaign', campaignSchema);

module.exports = { campaign };
