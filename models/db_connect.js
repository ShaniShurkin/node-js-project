const mongoose = require('mongoose');

//if error happen it’s catch here
//main().catch(err => console.log(err));
async function connect() {
    //the connect function of mongoose get the connection string to local or remote db
    const connString = `${process.env.DATABASE_URL}`;
    await mongoose.connect(
        connString);
    console.log('connect!!')
}

module.exports = { connect }
