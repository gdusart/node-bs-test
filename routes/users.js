var express = require('express');
var router = express.Router();
var credentials = require('../models/credentials');


/* GET: login */
router.post('/login', function(req, res, next) {
    //TODO: hash password
    credentials.findByMailAndPass(req.query.email, req.query.password, function(err, doc) {
        if (err) {
            next(err);
        }
        else {
            if (doc) {
                res.json(doc);
            } else {
                res.status(401).send("Invalid email/password");
            }
        }
    })
});

/* POST: register */
router.post('/register', function(req, res, next) {
    req.checkBody({
        'email': {
            notEmpty: true,
            isEmail: {
                errorMessage: 'Invalid Email'
            }
        },
        'password': {
            notEmpty: true,
            errorMessage: 'Invalid Password'
        }
    });

    var errors = req.validationErrors();
    if (errors) {
        next(errors);
    }
    else {
        //TODO: hash password
        credentials.register(req.body.email, req.body.password, function(err, doc) {
            if (err) {
                //todo: special message for already existing user ? (see request-flash)
                next(err);
            }
            else {
                res.json(doc)
            }
        });
    }


})

module.exports = router;