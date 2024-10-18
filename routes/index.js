const express = require('express');
const {User} = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

/*
router.post('/', (req, res) => {
    res.json({ data: "??" });
});
*/

module.exports = router;