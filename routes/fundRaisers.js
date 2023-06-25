const express = require('express');
const fundRaiserService = require('../services/fundRaiserService');
const router = express.Router();
const logger = require('../middlewares/logger');

router.get('/get', async (req, res) => {
    res.send(await fundRaiserService.getFundRaisers());
});
router.get('/get/:id', async (req, res) => {
    var fundRaiserId = req.params['id'];
    res.send(await fundRaiserService.getFundRaiserById(fundRaiserId));
});
router.post('/create', async (req, res) => {
    var fundRaiser = req.body
    res.send(await fundRaiserService.createFundRaiser(fundRaiser));
   
});
router.put('/update', async (req, res) => {
    var fundRaiser = req.body
    res.send(await fundRaiserService.updateFundRaiser(fundRaiser));
});
router.delete('/delete/:id', async (req, res) => {
    var fundRaiserId = req.params['id'];
    res.send(await fundRaiserService.deleteFundRaiser(fundRaiserId));
});
module.exports = router;