const fundRaiserRepository  = require('../repositories/fundRaiserRepo');

class FundRaiserService {

    constructor() {}

    async getFundRaisers() {
        return await fundRaiserRepository.getFundRaisers();
    }
    async getFundRaiserById(id) {
        return await fundRaiserRepository.getFundRaiserById(id);
    }
    async getFundRaisersByGroup(groupId){
        return await fundRaiserRepository.getFundRaisersByGroup(groupId)
    }
    async getFundRaisersByCampaign(campaignId){
        return await fundRaiserRepository.getFundRaisersByCampaign(campaignId)
    }
    async createFundRaiser(fundRaiser) {
        return await fundRaiserRepository.createFundRaiser(fundRaiser);
    }

    async updateFundRaiser(fundRaiser) {
        return await fundRaiserRepository.updateFundRaiser(fundRaiser);
    }

    async deleteFundRaiser(id) {
        return await fundRaiserRepository.deleteFundRaiser(id);
    }

}

FundRaiserService = new FundRaiserService();
module.exports = FundRaiserService