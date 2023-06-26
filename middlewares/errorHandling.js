 const serverError = function(err, req, res, next){
    console.error("Oooopsss, an error occurred: " + err.stack)
    res.status(500).send(`error: ${err}\n Something went wrong, try later`)
}
const clientError  = function(err, req, res, next){
    console.error("Oooopsss, an error occurred: " + err.stack)
    res.status(500).send(`error: ${err}\n Something went wrong!`)
}   
module.exports = {serverError, clientError}