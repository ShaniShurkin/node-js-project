const campaignRepository  = require('../repositories/campaignRepo');

class CampaignService {

    constructor() {}

    async getCampaigns() {
        return await campaignRepository.getCampaigns();
    }
    async getCampaignById(id) {
        return await campaignRepository.getCampaignById(id);
    }
    async getDonationsByCampaign(campaignId){
        return await campaignRepository.getDonationsByCampaign(campaignId);
    }
    async getFundRaisersByCampaign(campaignId){
        return await campaignRepository.getFundRaisersByCampaign(campaignId)
    }
    async getGroupsByCampaign(campaignId){
        return await campaignRepository.getGroupsByCampaign(campaignId);
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