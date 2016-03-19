var express = require('express');
var router = express.Router();
var servers = require('../models/servers');


/* GET by id */
router.get('/id/:serverId', function(req, res, next) {
    servers.get(req.params.serverId, function(error,results){
        res.json(results);
    });
});


/* GET list */
router.get('/', function(req, res, next) {
    servers.all(function(error, results) {
        res.json(results);
    });
});


/* GET find by name*/
router.get('/name/:name', function(req, res, next) {
    servers.findByName(req.params.name,function(error, results) {
        res.json(results);
    });
});


/* DELETE servers */
router.delete('/:serverId', function(req, res, next) {
    servers.delete(req.params.serverId, function(e,error) {
        res.json('ok');
    });
});

module.exports = router;


