const diseaseModel = require('../models').disease;

//create new disease
exports.create = async (req, res, next) => {
    const payload = req.body;
    try {
        const disease = await diseaseModel.findOne({
            where: {
                disease_name: payload.disease_name
            }
        })

        if(disease) {
            throw{
                status: 404,
                msg: 'Disease already exists'
            }
        }

        await diseaseModel.create(payload);
        return res.status(201).json({
            status: 'success',
            msg: "Disease has been created",
            data: payload
        });
    } catch (err) {
        next(err);
    }

    res.send(payload);
}

//update Disease
exports.update = async (req, res, next) => {
    try {
        dataDisease = req.body
        let findDisease = await diseaseModel.findOne({
            where: {
                id: req.params.id
            }
        })

        if(findDisease==null){
            res.status(404).send({
                msg: 'Disease is not found',
                status: 404
            })
        } else{
            await diseaseModel.update(dataDisease, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send({
                msg: 'Disease updated successfully',
                status: 200,
                dataDisease
            })
        }
    } catch (err) {
        next(err)
    }
}

//delete existing Disease
exports.delete = async (req, res, next) => {
    try {
        const disease = await diseaseModel.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!disease){
            throw{
                status: 404,
                msg: 'Disease not found'
            }
        } else {
            await diseaseModel.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                msg: 'Disease deleted successfully'
            })
        }
    } catch (err) {
        next(err)
    }
}

exports.detail = async (req, res, next) => {
    try {
        const disease = await diseaseModel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            id: disease.id,
            disease_name: disease.disease_name
        })
    } catch (err) {
        next(err)
    }
}

exports.allDisease = async (req, res, next) => {
    try {
        const allDisease = await diseaseModel.findAll()
        return res.json({
            status: 200,
            msg: 'All diseases found',
            jumlah: allDisease.length,
            data: allDisease
        })
    } catch (err) {
        next(err)
    }
}