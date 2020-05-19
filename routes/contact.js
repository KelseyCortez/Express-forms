const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('contact', {
        title: 'Contact me here',
        submitted: false,
    });
});

router.post('/', (req, res)=> {
    res.render('contact', {
        title: 'Thanks for posting!',
        submitted: true,
    });
});

module.exports = router;