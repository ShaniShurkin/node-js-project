const express = require('express');
const groupService = require('../services/groupService');
const router = express.Router();
const logger = require('../middlewares/logger');

router.get('/get', async (req, res) => {
    res.send(await groupService.getGroups());
});
router.get('/get/:id', async (req, res) => {
    var groupId = req.params['id'];
    res.send(await groupService.getGroupById(groupId));
});
router.post('/create', async (req, res) => {
    var group = req.body
    res.send(await groupService.createGroup(group));
   
});
router.put('/update', async (req, res) => {
    var group = req.body
    res.send(await groupService.updateGroup(group));
});
router.delete('/delete/:id', async (req, res) => {
    var groupId = req.params['id'];
    res.send(await groupService.deleteGroup(groupId));
});
module.exports = router;