const diseaseModel = require('../models').disease
const diseaseBiodataModel = require('../models').disease_biodata
const {biodata,disease} = require('../models')

exports.create = async (req, res, next) => {
    const payload = req.headers
    try {
        const disease = await diseaseModel.findOne({
            where: {
                disease_name : payload.disease
            }
        })
        if(disease){
            await diseaseBiodataModel.create({
                biodata_id: payload.biodata,
                disease_id: disease.id
            })
            res.status(200).send({
                msg: 'Success'
            })
        }else{
            res.status(404).send({
                msg: 'Something went wrong when inserting data',
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
        const data = await diseaseBiodataModel.findOne({
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
    const payload = req.params
    try {
        const data = await diseaseBiodataModel.findOne({
            where: {
                id: payload.id
            }
        })
        if(data){
            await diseaseBiodataModel.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send({
                msg: 'Deleted successfully'
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