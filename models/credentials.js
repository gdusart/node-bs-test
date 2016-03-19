var credentialsDb = require('../db').get().get('credentials');

exports.findById = function(id, cb) {
    credentialsDb.findById(id),
        function(err, docs) {
            cb(err, docs);
        }
}

exports.findByMailAndPass = function(email, password, cb) {
    credentialsDb.findOne({
        email: email,
        password: password
    }, function(err, docs) {
        cb(err, docs);
    });
};

exports.register = function(email, password, cb) {
    credentialsDb.insert({
        email: email,
        password: password
    }, function(err, doc) {
        cb(err, doc);
    });
}
