var fs = require('fs');
var knox = require('knox');

var client = knox.createClient({
    key: 'AKIAJRFZHJQE2YWVS7EQ',
    secret: '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',
    bucket: 'sivans-bucket'
});

/*
fs.readFile('README', function(err, buf){
    var req = client.put('README', {
        'Content-Length': buf.length,
        'Content-Type' : 'text/plain'
    });
    req.on('response', function(res){
       if (200 == res.statusCode){
           console.log('saved to %s', req.url);
       }
    });
    req.end(buf);
});
*/

var stream = fs.createReadStream('./README');
client.putStream(stream, '/README', function(err, res){
    console.log(res.statusCode);
});
