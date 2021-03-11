'use strict';
var unirest = require("unirest");
const API = require("../apiValue/apiValue.js")

exports.previsousMatchesBetween2teams = function(req, res) {

    let request = unirest("GET", API.url + 'fixtures/h2h/' + req.params.team1 + '/' + req.params.team2);
    request.query({
        "timezone": "Europe/Paris"
    });    
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body);
    })
        
};

exports.last5MatchesOfATeam = function(req, res) {

    let request = unirest("GET", API.url + 'fixtures/team/' + req.params.team + '/last/5' );
    request.query({
        "timezone": "Europe/Paris"
    });    
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body);
    })
        
};

exports.matchById = function(req, res) {

    let request = unirest("GET", API.url + 'fixtures/id/' + req.params.id);
    request.query({
        "timezone": "Europe/Paris"
    });    
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body);
    })
        
};

exports.matchByDate = function(req, res) {

    let request = unirest("GET", API.url + 'fixtures/date/' + req.params.date);
    request.query({
        "timezone": "Europe/Paris"
    });    
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body);
    })
        
};

exports.matchByDateAndLeague = async function(req, res) {
    let request = unirest("GET", API.url + 'fixtures/league/' + req.params.league + '/' + req.params.date);  
    request.query({
        "timezone": "Europe/Paris"
    }); 
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body);
    })
           
};

exports.next10MatchesByLeague = function(req, res) {

    let request = unirest("GET", API.url + 'fixtures/league/' + req.params.id + '/next/10');
    request.query({
        "timezone": "Europe/Paris"
    });    
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body);
    })
        
};


