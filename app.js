const express = require('express');
const logger = require('./middlewares/logger');
const errorHandling = require('./middlewares/errorHandling');
const {connect} = require('./routes/db_connect')
//const {isUser} = require('./middlewares/authorization')

require('dotenv').config();
const campaigns = require('./routes/campaign');
const groups = require('./routes/group');
const fundRaisers = require('./routes/fundRaisers');
const donations = require('./routes/donation');
const app = express();
connect()
//app.use(express.static('pages'));//127.0.0.1:3000/pages/mySwagger.html
app.use(express.json());
app.use(logger('begin'));
app.use('/api/campaigns', campaigns);
app.use('/api/groups', groups);
app.use('/api/fund-raisers', fundRaisers);
app.use('/api/donations', donations);
app.use(errorHandling)
app.listen(process.env.PORT, () => {
    console.log('server is up and running')
})