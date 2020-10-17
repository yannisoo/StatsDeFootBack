'use strict';
var unirest = require("unirest");
const API = require("../apiValue/apiValue.js")

exports.previsousMatchesBetween2teams = function(req, res) {

    let request = unirest("GET", API.url + 'v2/fixtures/h2h/' + req.params.team1 + '/' + req.params.team2);
    request.query({
        "timezone": "Europe/Paris"
    });    
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body.api);
    })
        
};


