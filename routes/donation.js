const express = require('express');
const donationService = require('../services/donationService');
const router = express.Router();
const logger = require('../middlewares/logger');

router.get('/get', async (req, res) => {
    res.send(await donationService.getDonations());
});
router.get('/get/:id', async (req, res) => {
    var donationId = req.params['id'];
    res.send(await donationService.getDonationById(donationId));
});
router.post('/create', async (req, res) => {
    var donation = req.body
    res.send(await donationService.createDonation(donation));
   
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