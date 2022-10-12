const express = require('express');
const router = express.Router();
const konsulController = require('../controllers/konsulController')
const {authentication} = require('../middleware/authMiddleware')

router.post('/', authentication , konsulController.create);
router.delete('/:id', authentication , konsulController.delete);
router.get('/:id', authentication , konsulController.detail);

module.exports = router;