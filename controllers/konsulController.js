const konsulModel = require('../models').konsul;

//Create a Konsul
exports.create = async (req, res, next) => {
    const payload = req.body;
    try {
        const konsul = await konsulModel.findOne({
            where: {
                pasien_id: payload.pasien_bioid,
                dokter_id: payload.dokter_bioid
            }
        })
        if (konsul == null) {
            await konsulModel.create({
                pasien_id: payload.pasien_bioid,
                dokter_id: payload.dokter_bioid
            });
            return res.status(201).send({
                status: 'success',
                msg: 'Created successfully',
                data: payload
            })
        } else {
            await konsulModel.update(payload, {
                where: {
                    pasien_id: payload.pasien_bioid,
                    dokter_id: payload.dokter_bioid
                }
            });
            res.status(302).send({
                status: 'success',
                msg: 'Data already exists and updated successfully',
                data: payload
            })

        }
    } catch (err) {
        next(err);
    }
}

//Get detail of one konsul
exports.detail = async (req, res, next) => {
    try {
        const konsul = await konsulModel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            status: 'success',
            data: konsul
        })
    } catch (err) {
        next(err)
    }
}

//Delete existing konsul
exports.delete = async (req, res, next) => {
    try {
        const konsul = await konsulModel.findOne({
            where: {
                id: req.params.id
            }
        })

        if (!konsul) {
            throw {
                status: 404,
                msg: 'konsul not found'
            }
        } else {
            await konsulModel.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                msg: 'konsul deleted successfully'
            })
        }
    } catch (err) {
        next(err)
    }
}