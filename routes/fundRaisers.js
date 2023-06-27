const express = require('express');
const fundRaiserService = require('../services/fundRaiserService');
const router = express.Router();
const logger = require('../middlewares/logger');
const errorHandleing = require('../middlewares/errorHandling');

router.get('/', async (req, res, next) => {
    let result = await fundRaiserService.getFundRaisers();
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
    let fundRaiserId = req.params['id'];
    let result = await fundRaiserService.getFundRaiserById(fundRaiserId);
    if(result instanceof Error){
        next(result)
    }else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
});
router.get('/:fundRaiserId/donations', async (req, res) => {
    let fundRaiserId = req.params['fundRaiserId'];
    let result = await fundRaiserService.getDonationsByFundRaiser(fundRaiserId);
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
    let fundRaiser = req.body
    let result = await fundRaiserService.createFundRaiser(fundRaiser);
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
    let fundRaiser = req.body
    let result = await fundRaiserService.updateFundRaiser(fundRaiser);
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
    let fundRaiserId = req.params['id'];
    let result = await fundRaiserService.deleteFundRaiser(fundRaiserId);
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