var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err){
    console.log("There was an error. Specifically, error ", err);
    return null;
  })
  .on('response', function(response){
    console.log('Response Status Message: ', response.statusMessage + '\n' + 'Content Type: ', response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'));