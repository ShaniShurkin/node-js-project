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
    async getDonationByFundRaiser(fundRaiserId){
        return await donationRepository.getDonationByFundRaiser(fundRaiserId);
    }
    async getDonationByGroup(groupId){
        return await donationRepository.getDonationByGroup(groupId);
    }
    async getDonationByCampaign(campaignId){
        return await donationRepository.getDonationByCampaign(campaignId);
    }
    async createDonation(donation) {
        let fundRaiser = await fundRaiserRepo.getFundRaiserById(donation.fundRaiserId);
        fundRaiser = fundRaiser[0]
        let f = {
            id: fundRaiser.id,
            currentAmount: fundRaiser.currentAmount + donation.amount,
          }
        await fundRaiserRepo.updateFundRaiser(f);
        //console.log(fundRaiser);
        let group = await groupRepo.getGroupById(fundRaiser.groupId);
        group = group[0];
        //console.log(group);
        let g = {
            id: group.id,
            currentAmount: group.currentAmount + donation.amount,
          }
        let campaign = await campaignRepo.getCampaignById(group.campaignId);
        campaign = campaign[0];
        let c = {
            id: campaign.id,
            currentAmount: campaign.currentAmount + donation.amount,
          }
        await campaignRepo.updateCampaign(c);
        donation.date = new Date();
        await donationRepository.createDonation(donation);
        let res = `campaign: ${campaign.name}\n
        group: ${group.name}\n
        fund raiser: ${fundRaiser.name}\n
        donor: ${donation.donorName}\n
        amount: ${donation.amount}\n`;
        res += donation.dedication?`dedication: ${donation.dedication}`:"";
        return res;
        // // if the user ID is 0, skip to the next route
        //     if (req.params.id === '0') next('route')
        //     // otherwise pass the control to the next middleware function in this stack
        //     else next()
        // }, (req, res, next) => {
        //     // send a regular response
        //     res.send('regular')
        //}
        //)
        
    }

    async updateDonation(donation) {
        return await donationRepository.updateDonation(donation);
    }

    async deleteDonation(id) {
        return await donationRepository.deleteDonation(id);
    }

}

module.exports = new DonationService();