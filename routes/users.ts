import * as express from 'express';
var router = express.Router();


var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://Yoav:!Q2w3e4r@yoavcluster-6ixmq.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  req;
  next;
  res.send('respond with a resource');
});

module.exports = router;
