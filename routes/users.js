const express = require('express');
const userController = require('../controllers/userController');
const { readData } = require('../utils/file');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get('/', (req, res) => {
    res.render('home');
});

router.post("/users", userController.createUser);


module.exports = router;
