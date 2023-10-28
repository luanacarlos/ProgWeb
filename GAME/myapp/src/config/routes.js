const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/sobre', function(req, res) {
    const username = 'David';
    res.render('index', {
        username,
        isRyan:(username=='Ryan'),
        layout:false
    });
});


router.use("/img", express.static(path.join(__dirname, '../../public/img')));


module.exports = router;