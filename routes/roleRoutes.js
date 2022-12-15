const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController')
const {authentication} = require('../middleware/authMiddleware')

router.post('/', authentication , roleController.create);
router.delete('/:id', authentication , roleController.delete);
router.get('/:id', authentication , roleController.detail);
router.get('/', roleController.allRole);

module.exports = router;