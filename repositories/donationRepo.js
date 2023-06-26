const { donation } = require('../models/donation')
const { connect } = require('../models/db_connect');

const logger = console;//require('../logger/api.logger');

class DonationRepository {

    constructor() {
        connect();
    }
    async getDonations() {
        let donations = {}
        try {
            donations = await donation.find({});
        } catch (error) {
            logger.error(error)
        }
        return donations;
    }

    async getDonationById(id) {
        let _donation = {}
        try {
            _donation = await donation.find({ id: id });
            console.log('donations:::', _donation);

        } catch (error) {
            logger.error(error)
        }
        return _donation;
    }
    async getDonationByFundRaiser(fundRaiserId) {
        let donations = []
        try {
            donations = await donation.find({ fundRaiserId: fundRaiserId });
        } catch (error) {
            logger.error(error)
        }
        return donations;
    }
    async getDonationByGroup(groupId) {
        let donations = []
        try {
            donations = await donation.find({ groupId: groupId });
        } catch (error) {
            logger.error(error)
        }
        return donations;
    }
    async getDonationByCampaign(campaignId) {
        let donations = []
        try {
            donations = await donation.find({ campaignId: campaignId });
        } catch (error) {
            logger.error(error)
        }
        return donations;
    }

    async createDonation(_donation) {
        let data = ""
        try {
            data = await donation.create(_donation);
        } catch (error) {
            logger.error(error)
        }
        return data
    }

    async updateDonation(_donation) {
        let data = {};
        try {
            const filter = { id: _donation.id };
            const update = _donation;
            data = await donation.findOneAndUpdate(filter, update);
        } catch (error) {
            logger.error(error)
        }
        return data
    }

    async deleteDonation(id) {
        let data = {};
        try {
            data = await donation.deleteOne({ id: id });
        } catch (error) {
            logger.error(error)
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new DonationRepository();