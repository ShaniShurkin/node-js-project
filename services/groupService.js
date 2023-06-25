const groupRepository  = require('../repositories/groupRepo');

class GroupService {

    constructor() {}

    async getGroups() {
        return await groupRepository.getGroups();
    }
    async getGroupById(id) {
        return await groupRepository.getGroupById(id);
    }
    async createGroup(group) {
        return await groupRepository.createGroup(group);
    }

    async updateGroup(group) {
        return await groupRepository.updateGroup(group);
    }

    async deleteGroup(id) {
        return await groupRepository.deleteGroup(id);
    }

}

module.exports = new GroupService();