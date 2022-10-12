const express = require('express');
const router = express.Router();
const diseaseController = require('../controllers/diseaseController')
const {authentication} = require('../middleware/authMiddleware')

router.post('/', authentication , diseaseController.create);
router.put('/:id', authentication , diseaseController.update);
router.delete('/:id', authentication , diseaseController.delete);
router.get('/:id', diseaseController.detail);
router.get('/', diseaseController.allDisease);

module.exports = router;