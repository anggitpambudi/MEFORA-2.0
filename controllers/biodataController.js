const biodataModel = require('../models').biodata;
const { speciality,disease,speciality_biodata,disease_biodata } = require('../models')

exports.create = async (req, res, next) => {
    try {
        const payload = req.body

        const biodata =  await biodataModel.findOne({
            where: {
                users_id: req.user.id
            }
        })
        if(biodata){
            res.status(200).send({
                msg: 'Biodata Already exists'
            })
        }else{
            await biodataModel.create({
                first_name: payload.first_name,
                last_name: payload.last_name,
                address: payload.address,
                birth: payload.birth,
                users_id: req.user.id
            });
            return res.status(200).send({
                msg: 'Successfully Created Biodata',
                data: payload
            })
        }
    } catch (err) {
        next(err);
    }
}

exports.update = async (req, res, next) => {
    try {
        const payload = req.body

        const data = await biodataModel.findOne({
            where: {
                users_id: req.user.id
            }
        })
        if(data){
            await biodataModel.update({
                first_name: payload.first_name,
                last_name: payload.last_name,
                address: payload.address,
                birth: payload.birth,
                users_id: req.user.id    
            }, {
                where: {
                    users_id: req.user.id
                }
            })
            return res.status(200).send({
                msg: 'Successfully Updated Biodata',
                data: payload
            })
        }else{
            res.status(404).send({
                msg: 'Biodata is not found'
            })
        }
    } catch (err) {
        next(err);
    }
}

exports.detail = async (req, res, next) => {
    try {
        const data = await biodataModel.findOne({
            where: {
                users_id: req.user.id
            },
            include: [{
                model: speciality,
                as: 'speciality'
            },{
                model: disease,
                as: 'disease'
            }]
        })
        const dataSpeciality = await speciality_biodata.findOne({
            where: {
                biodata_id : data.id
            }
        })
        const dataDisease = await disease_biodata.findOne({
            where: {
                biodata_id : data.id
            }
        })
        if(data&&dataSpeciality){
            res.status(200).send({
                status: 'Success',
                data: {
                    data,
                    speciality
                }
            })
        }else if(data&&dataDisease){
            res.status(200).send({
                status: 'Success',
                data: {
                    data,
                    disease
                }
            })
        }
        else{
            res.status(404).send({
                msg: 'Biodata is not found'
            })
        }
    } catch (err) {
        next(err);
    }
}