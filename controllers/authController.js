const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models').user;

//register user
exports.register = async (req, res, next) => {
    const payload = req.body;
    const salt = bcrypt.genSaltSync(10);
    payload.password = bcrypt.hashSync(payload.password, salt);

    try {
        const user = await userModel.findOne({
            where: {
                email: payload.email
            }
        })

        if(user){
            throw{
                status: 400,
                msg: "Email already exists"
            }
        }

        await userModel.create(payload);
        return res.status(201).json({
            status: 'success',
            msg: "Registration successful",
            data: payload
        });
    } catch (err) {
        next(err)
    }

    res.send(payload);
}

//login user
exports.login = async (req, res, next) => {
    try {
        const user = await userModel.findOne({
            where: {
                email: req.body.email
            }
        })

        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                const  token = jwt.sign({
                    id: user.id,
                    email: user.email
                }, process.env.JWT_SECRET)
                res.status(200).json({
                    token,
                })
            }else{
                throw {
                    status: 400,
                    msg: 'Invalid email or password'
                }
            }
        }else{
            throw{
                status: 400,
                msg: 'Invalid email or password'
            }
        }
    } catch (err) {
        next(err)
    }
}