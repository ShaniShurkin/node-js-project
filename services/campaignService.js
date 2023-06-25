const campaignRepository  = require('../repositories/campaignRepo');

class CampaignService {

    constructor() {}

    async getCampaigns() {
        return await campaignRepository.getCampaigns();
    }
    async getCampaignById(id) {
        return await campaignRepository.getCampaignById(id);
    }
    async createCampaign(campaign) {
        return await campaignRepository.createCampaign(campaign);
    }

    async updateCampaign(campaign) {
        return await campaignRepository.updateCampaign(campaign);
    }

    async deleteCampaign(id) {
        return await campaignRepository.deleteCampaign(id);
    }

}

CampaignService = new CampaignService();
module.exports = CampaignService