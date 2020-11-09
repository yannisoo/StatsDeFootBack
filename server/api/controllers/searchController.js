'use strict';
var unirest = require("unirest");
const API = require("../apiValue/apiValue.js")

exports.searchTeam = function(req, res) {
    let request = unirest("GET", API.url + 'v2/teams/search/' + req.params.name );
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body.api);
    });
}

exports.searchCoach = function(req, res) {
    let request = unirest("GET", API.url + 'v2/coachs/search/' + req.params.name );
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body.api);
    });
}

exports.searchLeague = function(req, res) {
    let request = unirest("GET", API.url + 'v2/leagues/search/' + req.params.name );
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body.api);
    });
}

exports.searchPlayer = function(req, res) {
    let request = unirest("GET", API.url + 'v2/players/search/' + req.params.name );
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body.api);
    });
}