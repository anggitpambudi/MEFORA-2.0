const express = require('express');
const router = express.Router();
const specialityController = require('../controllers/specialityController')
const {authentication} = require('../middleware/authMiddleware')

router.post('/', authentication , specialityController.create);
router.put('/:id', authentication , specialityController.update);
router.delete('/:id', authentication , specialityController.delete);
router.get('/:id', specialityController.detail);
router.get('/', specialityController.allSpeciality);

module.exports = router;