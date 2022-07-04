var express = require('express');


const router = express.Router();


router.get('/', (req, res) => {
    res.send("Test with back");
});

module.exports = router;