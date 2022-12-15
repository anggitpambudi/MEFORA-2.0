const express = require('express');
const router = express.Router();
const specialityBiodataController = require('../controllers/specialityBiodataController')

router.post('/',specialityBiodataController.create);
router.delete('/:id',specialityBiodataController.delete);
router.get('/:id',specialityBiodataController.detail)

module.exports = router;