const { donation } = require('../models/donation')
const { connect } = require('../models/db_connect');

const logger = console;//require('../logger/api.logger');

class DonationRepository {

    constructor() {
        connect();
        this.DonationError = new Error("No Such Donation")
    }
    async getDonations() {
        try {
            return await donation.find({});
        } catch (error) {
            return error
        }
    }
    async getDonationById(id) {
        let _donation = {}
        try {
            _donation = await donation.find({ id: id });
            if (_donation.length == 0) {
                throw this.DonationError;
            }
            return _donation;
        } catch (error) {
            return error
        }
    }
    async createDonation(_donation) {
        try {
            return await donation.create(_donation);
        } catch (error) {
            return error
        }
    }
    async updateDonation(_donation) {
        let data = {};
        try {
            const filter = { id: _donation.id };
            const update = _donation;
            let result = await donation.findOneAndUpdate(filter, update);
            if (result == null) {
                throw this.DonationError
            }
            return result
        }
        catch (error) {
            return error
        }
    }
    async deleteDonation(id) {
        try {
            let result = await donation.deleteOne({ id: id });
            if (!result.deletedCount)
                throw this.DonationError
            return result
        } catch (error) {
            return error
        }
    }
}

module.exports = new DonationRepository();