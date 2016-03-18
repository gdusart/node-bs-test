var dbExport = require('../db')

var db = dbExport.get();

exports.get = function(id, cb) {
  db.get('servers').findById(id, function(err, docs) {
    cb(err,docs); 
  });
};

exports.all = function(cb) {
  db.get('servers').find({}, function(err, docs) {
    cb(err,docs); 
  });
};

exports.delete = function(id, cb) {
    db.get('server').remove({_id : id}, function(err) {
         cb(err);
    });
}

exports.findByName = function(name, cb) {
    var nameCriteria = {name: {$regex: name,  $options: 'i' }}
    db.get('servers').find(nameCriteria, { sort : { name : -1 }}, cb);
}