var express = require('express'),
    app = express();

var port = process.env.PORT || 4000;

app.use('/', express.static(__dirname)); 

app.listen(port, function () {
    console.log('Sample-25 running on port ' + port);
    console.log('Node.js version: ' + process.versions.node);
});
