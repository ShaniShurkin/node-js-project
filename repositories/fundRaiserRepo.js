const { fundRaiser } = require('../models/fund_raiser')
const { donation } = require('../models/donation');

class FundRaiserRepository {

    constructor() {
        this.FundRaiserError = new Error("No Such Fund Raiser")
    }
    async getFundRaisers() {
        try {
            return await fundRaiser.find({});
        } catch (error) {
            return error
        }
    }
    async getFundRaiserById(id) {
        let _fundRaiser = {}
        try {
            _fundRaiser = await fundRaiser.find({ id: id });
            if (_fundRaiser.length == 0) {
                throw this.FundRaiserError;
            }
            return _fundRaiser;
        } catch (error) {
            return error
        }
    }
    async getDonationsByFundRaiser(fundRaiserId) {
        let donations = []
        try {
            donations = await donation.find({ fundRaiserId: fundRaiserId });
            if (donations.length == 0) {
                throw this.FundRaiserError;
            }
            return donations;
        } catch (error) {
            return error
        }
    }
    async createFundRaiser(_fundRaiser) {
        try {
            return await fundRaiser.create(_fundRaiser);
        } catch (error) {
            return error
        }
    }
    async updateFundRaiser(_fundRaiser) {
        let data = {};
        try {
            const filter = { id: _fundRaiser.id };
            const update = _fundRaiser;
            let result = await fundRaiser.findOneAndUpdate(filter, update);
            if (result == null) {
                throw this.FundRaiserError
            }
            return result
        }
        catch (error) {
            return error
        }
    }
    async deleteFundRaiser(id) {
        try {
            let result = await fundRaiser.deleteOne({ id: id });
            if (!result.deletedCount)
                throw this.FundRaiserError
            return result
        } catch (error) {
            return error
        }
    }

}

module.exports = new FundRaiserRepository();