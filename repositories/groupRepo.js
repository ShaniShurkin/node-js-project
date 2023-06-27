const { group } = require('../models/group')
const { fundRaiser } = require('../models/fund_raiser');
const { donation } = require('../models/donation');
const logger = console;//require('../logger/api.logger');

class GroupRepository {

    constructor() {
        this.GroupError = new Error("No Such Group")
        
    }
    async getGroups() {
        try {
            return await group.find({});
        } catch (error) {
            return error
        }
    }
    async getGroupById(id) {
        let _group = {}
        try {
            _group = await group.find({ id: id });
            if (_group.length == 0) {
                throw this.GroupError;
            }
            return _group;
        } catch (error) {
            return error
        }
    }
    async getFundRaisersByGroup(groupId) {
        try {
            let fundRaisers = await fundRaiser.find({ groupId: groupId });
            if (fundRaisers.length == 0) {
                throw this.GroupError;
            }
            return fundRaisers;
        } catch (error) {
            return error
        }}
    async getDonationsByGroup(groupId) {
        try {
            let donations = await donation.find({ groupId: groupId });
            if (donations.length == 0) {
                throw this.GroupError;
            }
            return donations
        } catch (error) {
            return error
        }
    }
    async createGroup(_group) {
        try {
            return await group.create(_group);
        } catch (error) {
            return error
        }
    }
    async updateGroup(_group) {
        let data = {};
        try {
            const filter = { id: _group.id };
            const update = _group;
            let result = await group.findOneAndUpdate(filter, update);
            if (result == null) {
                throw this.GroupError
            }
            return result
        }
        catch (error) {
            return error
        }
    }
    async deleteGroup(id) {
        try {
            let result = await group.deleteOne({ id: id });
            if (!result.deletedCount)
                throw this.GroupError
            return result
        } catch (error) {
            return error
        }
    }

}

module.exports = new GroupRepository();