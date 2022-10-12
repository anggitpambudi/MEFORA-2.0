const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const {authentication} = require('../middleware/authMiddleware')

router.put("/", authentication ,userController.update);
router.get("/", authentication ,userController.allUser);
router.get("/:id", authentication ,userController.detail);

module.exports = router;