const express = require('express');
const router = express.Router();
const biodataController = require('../controllers/biodataController')
const {authentication} = require('../middleware/authMiddleware')

router.post('/', authentication , biodataController.create);
router.put('/:id', authentication , biodataController.update);
router.get('/:id', authentication , biodataController.detail);

module.exports = router;