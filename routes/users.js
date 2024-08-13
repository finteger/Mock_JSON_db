const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('home');
});

router.post("/users", userController.updateUser);


module.exports = router;
