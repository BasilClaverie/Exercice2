var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog', function(err) {
  if (err) { throw err; }
});


var newUrlSchema = new mongoose.Schema({
  url : String,
  date : { type : Date, default : Date.now }
});


var newUrlModel = mongoose.model('url', newUrlSchema);

var myNewUrl = newUrlModel();
myNewUrl.url='http://toplel.com';

myNewUrl.save(function (err) {
  if (err) { throw err; }
  console.log('URL ajoutée avec succès !');
  mongoose.connection.close();
});

