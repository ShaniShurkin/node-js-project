const { fundRaiser } = require('../models/fund_raiser')
const { connect } = require('../models/db_connect');
const logger = console;//require('../logger/api.logger');

class FundRaiserRepository {

    constructor() {
        connect();
    }
    async getFundRaisers() {
        let fundRaisers = {}
        try {
            fundRaisers = await fundRaiser.find({});
            console.log('fundRaisers:::', fundRaisers);

        } catch (error) {
            logger.error(error)
        }
        return fundRaisers;
    }

    async getFundRaiserById(id) {
        let _fundRaiser = {}
        try {
            _fundRaiser = await fundRaiser.find({ id: id });
            

        } catch (error) {
            logger.error(error)
        }
        return _fundRaiser;
    }
    async getFundRaisersByGroup(groupId) {
        let fundRaisers = []
        try {
            fundRaisers = await fundRaiser.find({ groupId: groupId });
            console.log("ddddddddd")
            console.log(fundRaisers)

        } catch (error) {
            logger.error(error)
        }
        return fundRaisers;
    }
    async getFundRaisersByCampaign(campaignId) {
        let fundRaisers = []
        try {
            fundRaisers = await fundRaiser.find({ campaignId: campaignId });
         } catch (error) {
            logger.error(error)
        }
        return fundRaisers;
    }
    async createFundRaiser(_fundRaiser) {
        let data = ""
        try {
            data = await fundRaiser.create(_fundRaiser);
        } catch (error) {
            logger.error(error)
        }
        return data
    }

    async updateFundRaiser(_fundRaiser) {
        let data = {};
        try {
            const filter = { id: _fundRaiser.id };
            const update = _fundRaiser;
            data = await fundRaiser.findOneAndUpdate(filter, update);
        } catch (error) {
            logger.error(error)
        }
        return data
    }

    async deleteFundRaiser(id) {
        let data = {};
        try {
            data = await fundRaiser.deleteOne({ id: id });
        } catch (error) {
            logger.error(error)
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new FundRaiserRepository();