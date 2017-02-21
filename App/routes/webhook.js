var express = require('express');
//var requestify = require('requestify');
var router = express.Router();
var FirebaseClient = require('firebase-client');


var firebase = new FirebaseClient({
  url: process.env.FIREBASE_URL,
  auth: process.env.FIREBASE_SECRET
});


var bodyParser = require('body-parser');
var resetRoute = router.route('/reset');

var parseUrlencoded = bodyParser.json();
// =====================================================
// Process CrowdFlower Webhook
// =====================================================
router.route('/')
    .post(parseUrlencoded, function(request, response) {
        content = request.payload
        firebase.push('logs',content);
        console.log(request.body);
        response.json("test");
    });
module.exports = router;
