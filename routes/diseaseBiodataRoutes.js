const express = require('express');
const router = express.Router();
const diseaseBiodataController = require('../controllers/diseaseBiodataController')

router.post('/',diseaseBiodataController.create);
router.delete('/:id',diseaseBiodataController.delete);
router.get('/:id',diseaseBiodataController.detail);

module.exports = router;