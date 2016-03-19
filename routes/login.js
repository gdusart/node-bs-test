var express = require('express');
var router = express.Router();


/* GET: login */
router.post('/', function(req, res, next) {
    var session = {id:43, user: {name: "name", role: "admin"}}
    res.json(session);
});

module.exports = router;