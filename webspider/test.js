//load the Client interface
var MongoClient = require('mongodb').MongoClient;
// the client db connection scope is wrapped in a callback:
MongoClient.connect('mongodb://'+connection_string, function(err, db) {
  if(err) throw err;
  var collection = db.collection('books').find().limit(10).toArray(function(err, docs) {
    console.dir(docs);
    db.close();
  })
})
