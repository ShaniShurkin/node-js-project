const { group } = require('../models/group')
const { connect } = require('../models/db_connect');
const logger = console;//require('../logger/api.logger');

class GroupRepository {

    constructor() {
        connect();
    }
    async getGroups() {
        let groups = {}
        try {
            groups = await group.find({});
            console.log('groups:::', groups);

        } catch (error) {
            logger.error(error)
        }
        return groups;
    }

    async getGroupById(id) {
        let group_ = {}
        try {
            group_ = await group.find({ id: id });
            console.log("id: "+id)
            console.log("group: "+group_)
        } catch (error) {
            logger.error(error)
        }
        return group_;
    }


    async createGroup(_group) {
        let data = ""
        try {
            data = await group.create(_group);
        } catch (error) {
            logger.error(error)
        }
        return data
    }

    async updateGroup(_group) {
        let data = {};
        try {
            const filter = { id: _group.id };
            const update = _group;
            data = await group.findOneAndUpdate(filter, update);
        } catch (error) {
            logger.error(error)
        }
        return data
    }

    async deleteGroup(id) {
        let data = {};
        try {
            data = await group.deleteOne({ id: id });
        } catch (error) {
            logger.error(error)
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new GroupRepository();