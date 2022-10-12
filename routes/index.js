const express = require('express')
const router = express.Router()
const authRoutes = require('../routes/authRoutes')
const userRoutes = require('../routes/userRoutes')
const roleRoutes = require('../routes/roleRoutes')
const specialityRoutes = require('../routes/specialityRoutes')
const diseaseRoutes = require('../routes/diseaseRoutes')
const konsulRoutes = require('../routes/konsulRoutes')

const errorHandler = require('../middleware/errorHandler')

router.use('/api/auth', authRoutes)
router.use('/api/user', userRoutes)
router.use('/api/role', roleRoutes)
router.use('/api/speciality', specialityRoutes)
router.use('/api/disease', diseaseRoutes)
router.use('/api/konsul', konsulRoutes)

router.use(errorHandler)

module.exports = router;