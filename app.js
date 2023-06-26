const express = require('express');
const logger = require('./middlewares/logger');
const {serverError} = require('./middlewares/errorHandling');
//const {isUser} = require('./middlewares/authorization')

require('dotenv').config();
const campaigns = require('./routes/campaign');
const groups = require('./routes/group');
const fundRaisers = require('./routes/fundRaisers');
const donations = require('./routes/donation');
const app = express();
//app.use(express.static('pages'));//127.0.0.1:3000/pages/mySwagger.html
app.use(express.json());
app.use(logger('begin'));

app.use('/api/campaigns', campaigns);
app.use('/api/groups', groups);
app.use('/api/fund-raisers', fundRaisers);
app.use('/api/donations', donations);

app.use(serverError)

//app.use(logger('end'));//will apply this middlware only if the response was not closed before


app.listen(3000, () => {
    console.log('server is up and running')
})