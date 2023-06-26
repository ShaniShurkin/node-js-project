const express = require('express');
const campaignService = require('../services/campaignService');
const router = express.Router();
const logger = require('../middlewares/logger');
const {serverError} = require('../middlewares/errorHandling');
router.get('/', async (req, res) => {
    let result = await campaignService.getCampaigns();
    
    if(result.error){
        next(result.error)
    }
    res.send(result);
});
router.get('/:id', async (req, res, next) => {
    let campaignId = req.params['id'];
    let result = await campaignService.getCampaignById(campaignId);
    if(result instanceof Error){
        next(result)
    }else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
   
});
router.get('/:campaignId/donations', async (req, res) => {
    let campaignId = req.params['campaignId'];
    let result = await campaignService.getDonationsByCampaign(campaignId);
    if(result instanceof Error){
        next(result)
    }else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
});
router.get('/:campaignId/groups', async (req, res, next) => {
    var campaignId = req.params['campaignId'];
    let result = await campaignService.getGroupsByCampaign(campaignId);
    if(result instanceof Error){
        next(result)
    }else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
});
router.get('/:campaignId/fund-raisers', async (req, res, next) => {
    let campaignId = req.params['campaignId'];
    let result = await campaignService.getFundRaisersByCampaign(campaignId);
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
    let campaign = req.body
    let result = await campaignService.createCampaign(campaign);
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
    let campaign = req.body
    let result = await campaignService.updateCampaign(campaign);
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
    let campaignId = req.params['id'];
    let result = await campaignService.deleteCampaign(campaignId);
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