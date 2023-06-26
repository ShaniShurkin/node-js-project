const express = require('express');
const donationService = require('../services/donationService');
const router = express.Router();
const logger = console;
router.get('/get', async (req, res) => {
    res.send(await donationService.getDonations());
});
router.get('/get/:id', async (req, res) => {
    var donationId = req.params['id'];
    res.send(await donationService.getDonationById(donationId));
});
router.get('/get/fund-raiser-id/:fundRaiserId', async (req, res) => {
    var fundRaiserId = req.params['fundRaiserId'];
    res.send(await donationService.getDonationByFundRaiser(fundRaiserId));
});
router.get('/get/group-id/:groupId', async (req, res) => {
    var groupId = req.params['groupId'];
    res.send(await donationService.getDonationByGroup(groupId));
});
router.get('/get/campaign-id/:campaignId', async (req, res) => {
    var campaignId = req.params['campaignId'];
    res.send(await donationService.getDonationByCampaign(campaignId));
});
router.post('/create', async (req, res) => {
    var donation = req.body
    let result = await donationService.createDonation(donation);
    logger.log("rrrrrrrrrrrrrrrr")
    logger.log(result)
    res.send(result
        );
});
router.put('/update', async (req, res) => {
    var donation = req.body
    res.send(await donationService.updateDonation(donation));
});
router.delete('/delete/:id', async (req, res) => {
    var donationId = req.params['id'];
    res.send(await donationService.deleteDonation(donationId));
});
module.exports = router;