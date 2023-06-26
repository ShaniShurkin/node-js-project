const express = require('express');
const {serverError} = require('../middlewares/errorHandling');
const donationService = require('../services/donationService');
const router = express.Router();
const logger = console;
router.get('/', async (req, res) => {
    let result = await donationService.getDonations();
    if(result instanceof Error){
        next(result)
    }else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
});
router.get('/:id', async (req, res) => {
    let donationId = req.params['id'];
    let result = await donationService.getDonationById(donationId);
    if(result instanceof Error){
        next(result)
    }else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
});
router.post('/create', async (req, res) => {
    let donation = req.body
    let result = await donationService.createDonation(donation);
    logger.log(result)
    if(result instanceof Error){
        next(result)
    }else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
});
router.put('/update', async (req, res) => {
    let donation = req.body
    let result = await donationService.updateDonation(donation);
    if(result instanceof Error){
        next(result)
    }else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
});
router.delete('/delete/:id', async (req, res) => {
    let donationId = req.params['id'];
    let result = await donationService.deleteDonation(donationId);
    if(result instanceof Error){
        next(result)
    }else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
});
router.use(serverError)

module.exports = router;