const specialityBiodataModel = require('../models').speciality_biodata;
const specialityModel = require('../models').speciality;
const {biodata} = require('../models')

exports.create = async (req, res, next) => {
    const payload = req.headers
    try {
        const speciality = await specialityModel.findOne({
            where: {
                speciality_name: payload.speciality
            }
        })
        if (speciality) {
            await specialityBiodataModel.create({
                biodata_id: payload.biodata,
                speciality_id: speciality.id
            })
            res.status(200).send({
                msg: 'success'
            })
        } else {
            res.status(404).send({
                msg: 'Something wrong when inserting data',
                status: 'failed'
            })
        }
    } catch (err) {
        next(err);
    }
}

exports.detail = async (req, res, next) => {
    try {
        const payload = req.params
        const data = await specialityBiodataModel.findOne({
            where: {
                biodata_id: payload.id
            }
        })
        if(data){
            res.status(200).send({
                msg: 'Success',
                data: data
            })
        }else{
            res.status(404).send({
                msg: 'Not Found'
            })
        }
    } catch (err) {
        next(err);
    }
}

exports.delete = async (req, res, next) => {
    try {
        await specialityBiodataModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send({
            msg: 'Deleted successfully'
        })
    } catch (err) {
        next(err);
    }
}