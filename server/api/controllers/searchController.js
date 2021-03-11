'use strict';
var unirest = require("unirest");
const API = require("../apiValue/apiValue.js")

exports.searchTeam = function(req, res) {
    let request = unirest("GET", API.url + 'teams/search/' + req.params.name );
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body);
    });
}

exports.searchCoach = function(req, res) {
    let request = unirest("GET", API.url + 'coachs/search/' + req.params.name );
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body);
    });
}

exports.searchLeague = function(req, res) {
    let request = unirest("GET", API.url + 'leagues/search/' + req.params.name );
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body);
    });
}

exports.searchPlayer = function(req, res) {
    let request = unirest("GET", API.url + 'players/search/' + req.params.name );
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body);
    });
}