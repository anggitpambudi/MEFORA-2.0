const userModel = require('../models').user;

//Update user
exports.update = async (req, res, next) => {
    try {
        const dataUser = req.body
        let findUser = await userModel.findOne({
            where: {
                id: req.user.id
            }
        })

        if(findUser==null){
            res.status(404).send({
                msg: 'Data user is not found',
                status: 404
            })
        } else {
            await userModel.update(dataUser, {
                where: {
                    id: req.user.id
                }
            })
            const resObject = {...findUser.dataValues, dataUser}
            res.status(200).send({
                msg: 'User updated successfully',
                status: 200,
                resObject
            })
        }
    } catch (err) {
        next(err)
    }
}

//User details
exports.detail = async (req, res, next) => {
    try {
        const user = await userModel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            id: user.id,
            email: user.email,
            roles_id: user.roles_id
        })
    } catch (err) {
        next(err)
    }
}

//Gets all user
exports.allUser = async (req, res, next) => {
    try {
        const allUser = await userModel.findAll()
        return res.json({
            status: 200,
            msg: 'All users found',
            jumlah: allUser.length,
            data: allUser
        })
    } catch (err) {
        next(err)
    }
}