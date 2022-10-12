const jwt = require('jsonwebtoken')
const userModel = require('../models').user;

exports.authentication = async (req, res, next) => {
    try {
        if(!req.headers.authorization){
            throw{
                status: 401,
                msg: 'Unauthorized request'
            }
        }else{
            const payload = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
            const user = await userModel.findOne({
                where: {
                    id: payload.id,
                    email: payload.email
                }
            })
            if(user){
                req.user = payload
                next()
            } else {
                throw{
                    status: 401,
                    msg: 'Unauthorized request'
                }
            }
        }
    } catch (err) {
        next(err)
    }
}