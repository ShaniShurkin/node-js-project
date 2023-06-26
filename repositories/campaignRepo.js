const { campaign } = require('../models/campaign')
const { connect } = require('../models/db_connect');

const logger = console;//require('../logger/api.logger');

class CampaignRepository {

    constructor() {
        connect();
    }
    async getCampaigns() {
        let campaigns = {}
        try {
            campaigns = await campaign.find({});
            console.log('campaigns:::', campaigns);

        } catch (error) {
            logger.error(error)
            campaigns = error
           
        }
        return campaigns;
    }

    async getCampaignById(id) {
        let _campaign = {}
        try {
            _campaign = await campaign.find({ id: id });
            console.log('campaigns:::', _campaign);

        } catch (error) {
            logger.error(error)
            _campaign = error
        }
        return _campaign;
    }


    async createCampaign(_campaign) {
        let data = ""
        try {
            data = await campaign.create(_campaign);
        } catch (error) {
            logger.error(error)
        }
        return data
    }

    async updateCampaign(_campaign) {
        let data = {};
        try {
            const filter = { id: _campaign.id };
            const update = _campaign;
            data = await campaign.findOneAndUpdate(filter, update);
        } catch (error) {
            logger.error(error)
        }
        return data
    }

    async deleteCampaign(id) {
        let data = {};
        try {
            data = await campaign.deleteOne({ id: id });
        } catch (error) {
            logger.error(error)
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new CampaignRepository();