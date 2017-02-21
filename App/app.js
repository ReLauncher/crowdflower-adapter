var express = require('express');
var logger = require('./logger');
var app = express();

// Catching errors Opbeat.com
var opbeat = require('opbeat').start({
    organizationId: process.env.OPBEAT_ORGANIZATION_ID,
    appId: process.env.OPBEAT_APP_ID,
    secretToken: process.env.OPBEAT_SECRET_TOKEN
});

app.use(logger);

var webhook = require('./routes/webhook');
app.use('/webhook', webhook);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Listening on '+port);
});
