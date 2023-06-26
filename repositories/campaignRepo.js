const { campaign } = require('../models/campaign')
const { fundRaiser } = require('../models/fund_raiser')

const { connect } = require('../models/db_connect');
const { group } = require('../models/group');
const { donation } = require('../models/donation');

class CampaignRepository {
   
    constructor() {
        connect();
        this.CampaignError = new Error("No Such Campaign")
    }
    async getCampaigns() {
        try {
            return await campaign.find({});
        } catch (error) {
            return error
        }
    }
    async getCampaignById(id) {
        
        try {
            let _campaign = await campaign.find({ id: id });
            if (_campaign.length == 0) {
                throw this.CampaignError;
            }
            return _campaign;
        } catch (error) {
            return error
        }
    }
    async getDonationsByCampaign(campaignId) {
        let donations = []
        try {
            donations = await donation.find({ campaignId: campaignId });
            if (donations.length == 0) {
                throw this.CampaignError;
            }
            return donations;
        } catch (error) {
            return error
        }
    }
    async getFundRaisersByCampaign(campaignId) {
        try {
           let fundRaisers = await fundRaiser.find({ campaignId: campaignId });
           if (fundRaisers.length == 0) {
            throw this.CampaignError;
        }
        return fundRaisers;
    } catch (error) {
        return error
    }
    }
    async getGroupsByCampaign(campaignId) {
        try {
            let groups = await group.find({ campaignId: campaignId });
            if (groups.length == 0) {
                throw this.CampaignError;
            }
            return groups
         } catch (error) {
            return group
        }
    }
    async createCampaign(_campaign) {
        try {
            return await campaign.create(_campaign);
        } catch (error) {
            return error
        }
    }
    async updateCampaign(_campaign) {
        try {
            const filter = { id: _campaign.id };
            const update = _campaign;
            let result = await campaign.findOneAndUpdate(filter, update);
            if (result == null) {
                throw this.CampaignError
            }
            return result
        } 
        catch (error) {
            return error
        }
    }
    async deleteCampaign(id) {
        try {
            let result = await campaign.deleteOne({ id: id });
            if(!result.deletedCount)
                throw this.CampaignError
            return result
        } catch (error) {
            return error
        }
    }

}

module.exports = new CampaignRepository();