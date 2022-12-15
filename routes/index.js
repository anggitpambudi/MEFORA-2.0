const express = require('express')
const router = express.Router()
const authRoutes = require('../routes/authRoutes')
const userRoutes = require('../routes/userRoutes')
const roleRoutes = require('../routes/roleRoutes')
const specialityRoutes = require('../routes/specialityRoutes')
const diseaseRoutes = require('../routes/diseaseRoutes')
const konsulRoutes = require('../routes/konsulRoutes')
const specialityBiodataRoutes = require('../routes/specialityBiodataRoutes')
const biodataRoutes = require('../routes/biodataRoutes')
const diseaseBiodataRoutes = require('../routes/diseaseBiodataRoutes')

const errorHandler = require('../middleware/errorHandler')

router.use('/api/auth', authRoutes)
router.use('/api/user', userRoutes)
router.use('/api/role', roleRoutes)
router.use('/api/speciality', specialityRoutes)
router.use('/api/disease', diseaseRoutes)
router.use('/api/konsul', konsulRoutes)
router.use('/api/biodata', biodataRoutes)
router.use('/api/specialityBiodata', specialityBiodataRoutes)
router.use('/api/diseaseBiodata', diseaseBiodataRoutes)

router.use(errorHandler)

module.exports = router;