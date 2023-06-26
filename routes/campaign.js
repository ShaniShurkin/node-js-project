const express = require('express');
const campaignService = require('../services/campaignService');
const router = express.Router();
const logger = require('../middlewares/logger');

router.get('/get', async (req, res) => {
    
    res.send(await campaignService.getCampaigns());
});
router.get('/get/:id', async (req, res) => {
    var campaignId = req.params['id'];
    res.send(await campaignService.getCampaignById(campaignId));
});
router.post('/create', async (req, res) => {
    var campaign = req.body
    res.send(await campaignService.createCampaign(campaign));
   
});
router.put('/update', async (req, res) => {
    var campaign = req.body
    res.send(await campaignService.updateCampaign(campaign));
});
router.delete('/delete/:id', async (req, res) => {
    var campaignId = req.params['id'];
    res.send(await campaignService.deleteCampaign(campaignId));
});
module.exports = router;