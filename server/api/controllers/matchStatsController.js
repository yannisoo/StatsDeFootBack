'use strict';
var unirest = require("unirest");
const API = require("../apiValue/apiValue.js")

exports.getMatchStats = function(req, res) {
    let request = unirest("GET", API.url + 'v2/statistics/fixture/' + req.params.fixtures_id );
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body.api);
    });
}

