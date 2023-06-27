const express = require('express');
const groupService = require('../services/groupService');
const router = express.Router();
const logger = require('../middlewares/logger');
const errorHandleing = require('../middlewares/errorHandling');

router.get('/', async (req, res, next) => {
    let result = await groupService.getGroups();
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
    var groupId = req.params['id'];
    let result = await groupService.getGroupById(groupId);
    if(result instanceof Error){
        next(result)
    }else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
});
router.get('/:groupId/fund-raisers', async (req, res, next) => {
    var groupId = req.params['groupId'];
    let result = await groupService.getFundRaisersByGroup(groupId);
    if(result instanceof Error){
        next(result)
    }else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
});
router.get('/:groupId/donations', async (req, res, next) => {
    let groupId = req.params['groupId'];
    let result = await groupService.getDonationsByGroup(groupId);
    
    if(result instanceof Error){
        next(result)
    }
    else if(result.error){
        next(result.error)
    }
    else{
        res.send(result);
    }
});
router.post('/create', async (req, res, next) => {
    var group = req.body
    let result = await groupService.createGroup(group);
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
    var group = req.body
    let result = await groupService.updateGroup(group);
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
    var groupId = req.params['id'];
    let result = await groupService.deleteGroup(groupId);
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