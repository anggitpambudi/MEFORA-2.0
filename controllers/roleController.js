const roleModel = require('../models').role;

//create new role
exports.create = async (req, res, next) => {
    const payload = req.body;
    try {
        const role = await roleModel.findOne({
            where: {
                role: payload.role
            }
        })

        if(role) {
            throw{
                status: 404,
                msg: 'Role already exists'
            }
        }

        await roleModel.create(payload);
        return res.status(201).json({
            status: 'success',
            msg: "Role has been created",
            data: payload
        });
    } catch (err) {
        next(err);
    }

    res.send(payload);
}

//delete existing role
exports.delete = async (req, res, next) => {
    try {
        const role = await roleModel.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!role){
            throw{
                status: 404,
                msg: 'Role not found'
            }
        } else {
            await roleModel.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                msg: 'Role deleted successfully'
            })
        }
    } catch (err) {
        next(err)
    }
}

exports.detail = async (req, res, next) => {
    try {
        const role = await roleModel.findOne({
            where: {
                id: req.params.id
            }
        })
        if(role){
            res.status(200).json({
                id: role.id,
                role: role.role
            })
        }else{
            res.status(404).json({
                msg: 'Role does not exist'
            })
        }
        
    } catch (err) {
        next(err)
    }
}

exports.allRole = async (req, res, next) => {
    try {
        const allRole = await roleModel.findAll()
        return res.json({
            status: 200,
            msg: 'All roles found',
            jumlah: allRole.length,
            data: allRole
        })
    } catch (err) {
        next(err)
    }
}