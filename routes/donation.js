const express = require('express');
const errorHandleing = require('../middlewares/errorHandling');
const donationService = require('../services/donationService');
const router = express.Router();
const logger = console;
router.get('/', async (req, res, next) => {
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
router.get('/:id', async (req, res, next) => {
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
router.post('/create', async (req, res, next) => {
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
router.put('/update', async (req, res, next) => {
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
router.delete('/delete/:id', async (req, res, next) => {
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
router.use(errorHandleing)

module.exports = router;