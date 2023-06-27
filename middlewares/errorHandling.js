module.exports = function(err, req, res, next){
    //res.status(500).send(`${err}\n `)
    console.log("Middleware Error Hadnling");
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong, please try again later';
    res.status(errStatus)
    .send(`${errMsg}`)
    // .json({
    //     success: false,
    //     status: errStatus,
    //     message: errMsg,
    //     stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    // })
}
  
