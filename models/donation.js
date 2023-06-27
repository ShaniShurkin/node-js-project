const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    //id: {type: Number, unique: true},
    id:{
        type: Number,
        required: [true, 'ID is required']
      },
    fundRaiserId:{
      type: String,
      required: [true, 'Fund raiser id is required']
    },
    donorName:{
      type: String,
      required: [true, 'Donor name is required']
    },
    amount: {
      type: Number,
      required: [true, 'amount is required']
    },
    dedication: String,
    time: {
      type: Date,
      required: [true, 'Date is required']
    }
    },{ collection: 'donation' })

const donation = new mongoose.model('donation', donationSchema);

module.exports = { donation };
