var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err){
    console.log('There was an error. Specifically, error ', err);
    throw err;
  })
  .on('response', function(response){
    console.log('Response Status Message: ', response.statusMessage + '\n' + 'Content Type: ', response.headers['content-type']);
  })
  .on('end', function(){
    console.log('Downloading image...')
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('finish', function(){
    console.log('Download complete.');
  })

// considerations:
// - I already know 'finish' is used for write and 'end' for read, so I added a 'finish' after .pipe.