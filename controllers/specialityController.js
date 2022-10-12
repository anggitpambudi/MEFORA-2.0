const specialityModel = require('../models').speciality;

//create new speciality
exports.create = async (req, res, next) => {
    const payload = req.body;
    try {
        const speciality = await specialityModel.findOne({
            where: {
                name: payload.name
            }
        })

        if(speciality) {
            throw{
                status: 404,
                msg: 'Speciality already exists'
            }
        }

        await specialityModel.create(payload);
        return res.status(201).json({
            status: 'success',
            msg: "Speciality has been created",
            data: payload
        });
    } catch (err) {
        next(err);
    }

    res.send(payload);
}

//update speciality
exports.update = async (req, res, next) => {
    try {
        dataSpeciality = req.body
        let findSpeciality = await specialityModel.findOne({
            where: {
                id: req.params.id
            }
        })

        if(findSpeciality==null){
            res.status(404).send({
                msg: 'Speciality is not found',
                status: 404
            })
        } else{
            await specialityModel.update(dataSpeciality, {
                where: {
                    id: req.speciality.id
                }
            })
            res.status(200).send({
                msg: 'Speciality updated successfully',
                status: 200,
                dataSpeciality
            })
        }
    } catch (err) {
        next(err)
    }
}

//delete existing Speciality
exports.delete = async (req, res, next) => {
    try {
        const speciality = await specialityModel.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!speciality){
            throw{
                status: 404,
                msg: 'Speciality not found'
            }
        } else {
            await specialityModel.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                msg: 'Speciality deleted successfully'
            })
        }
    } catch (err) {
        next(err)
    }
}

exports.detail = async (req, res, next) => {
    try {
        const speciality = await specialityModel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            id: speciality.id,
            speciality_name: speciality.speciality_name
        })
    } catch (err) {
        next(err)
    }
}

exports.allSpeciality = async (req, res, next) => {
    try {
        const allSpeciality = await specialityModel.findAll()
        return res.json({
            status: 200,
            msg: 'All specialities found',
            jumlah: allSpeciality.length,
            data: allSpeciality
        })
    } catch (err) {
        next(err)
    }
}