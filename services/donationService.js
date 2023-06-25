const campaignRepo  = require('../repositories/campaignRepo');
const donationRepository  = require('../repositories/donationRepo');
const fundRaiserRepo = require('../repositories/fundRaiserRepo');
const groupRepo = require('../repositories/groupRepo');


class DonationService {

    constructor() {}

    async getDonations() {
        return await donationRepository.getDonations();
    }
    async getDonationById(id) {
        return await donationRepository.getDonationById(id);
    }
    async createDonation(donation) {
        let fundRaiser = await fundRaiserRepo.getFundRaiserById(donation.fundRaiserId);
        fundRaiser = fundRaiser[0]
        let f = {
            id: fundRaiser.id,
            currentAmount: fundRaiser.currentAmount + donation.amount,
          }
        let res = {}
        res += await fundRaiserRepo.updateFundRaiser(f);
        console.log(fundRaiser);
        let group = await groupRepo.getGroupById(fundRaiser.groupId);
        group = group[0];
        console.log(group);
        let g = {
            id: group.id,
            currentAmount: group.currentAmount + donation.amount,
          }
        res += await groupRepo.updateGroup(g);
        let campaign = await campaignRepo.getCampaignById(group.campaignId);
        campaign = campaign[0];
        let c = {
            id: campaign.id,
            currentAmount: campaign.currentAmount + donation.amount,
          }
        res += await campaignRepo.updateCampaign(c);
        res += await donationRepository.createDonation(donation);
        return res;
    }

    async updateDonation(donation) {
        return await donationRepository.updateDonation(donation);
    }

    async deleteDonation(id) {
        return await donationRepository.deleteDonation(id);
    }

}

module.exports = new DonationService();