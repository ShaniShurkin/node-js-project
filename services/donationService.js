const campaignRepo = require('../repositories/campaignRepo');
const donationRepository = require('../repositories/donationRepo');
const fundRaiserRepo = require('../repositories/fundRaiserRepo');
const groupRepo = require('../repositories/groupRepo');


class DonationService {

    constructor() { }

    async getDonations() {
        return await donationRepository.getDonations();
    }
    async getDonationById(id) {
        return await donationRepository.getDonationById(id);
    }
    async createDonation(donation) {
        try {
            let fundRaiser = await fundRaiserRepo.getFundRaiserById(donation.fundRaiserId);
            if (fundRaiser instanceof Error) {
                return fundRaiser
            }
            fundRaiser = fundRaiser[0]
            await this.updateCurrentFundRaiser(fundRaiser, donation.amount)
            let group = await groupRepo.getGroupById(fundRaiser.groupId);
            group = group[0];
            await this.updateCurrentGroup(group, donation.amount);
            let campaign = await campaignRepo.getCampaignById(group.campaignId);
            campaign = campaign[0];
            await this.updateCurrentCampaign(campaign, donation.amount);
            donation.date = new Date();
            await donationRepository.createDonation(donation);
            let res = `campaign: ${campaign.name}\n
            group: ${group.name}\n
            fund raiser: ${fundRaiser.name}\n
            donor: ${donation.donorName}\n
            amount: ${donation.amount}\n`;
            res += donation.dedication ? `dedication: ${donation.dedication}` : "";
            return res;
        } catch (error) {
            return error;
        }
    }
    async updateDonation(donation) {
        return await donationRepository.updateDonation(donation);
    }
    async deleteDonation(id) {
        return await donationRepository.deleteDonation(id);
    }
    async updateCurrentFundRaiser(fundRaiser, amount) {
        let f = {
            id: fundRaiser.id,
            currentAmount: fundRaiser.currentAmount + amount,
        }
        await fundRaiserRepo.updateFundRaiser(f);
    }
    async updateCurrentGroup(group, amount) {
        let g = {
            id: group.id,
            currentAmount: group.currentAmount + amount,
        }
        await groupRepo.updateGroup(g);
    }
    async updateCurrentCampaign(campaign, amount) {
        let c = {
            id: campaign.id,
            currentAmount: campaign.currentAmount + amount,
        }
        await campaignRepo.updateCampaign(c);
    }
}

module.exports = new DonationService();