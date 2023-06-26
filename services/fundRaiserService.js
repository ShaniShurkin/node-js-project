const fundRaiserRepository  = require('../repositories/fundRaiserRepo');

class FundRaiserService {

    constructor() {}

    async getFundRaisers() {
        return await fundRaiserRepository.getFundRaisers();
    }
    async getFundRaiserById(id) {
        return await fundRaiserRepository.getFundRaiserById(id);
    }
    async getDonationsByFundRaiser(fundRaiserId){
        return await fundRaiserRepository.getDonationsByFundRaiser(fundRaiserId);
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