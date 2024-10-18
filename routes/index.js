const express = require('express');
const {User} = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/home', (req,res) => {
    res.render('home');
})

/*
router.post('/', (req, res) => {
    res.json({ data: "??" });
});
*/

module.exports = router;