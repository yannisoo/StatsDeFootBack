'use strict';
var unirest = require("unirest");
const API = require("../apiValue/apiValue.js")

exports.getTeam = function(req, res) {
    let request = unirest("GET", API.url + 'teams/team/' + req.params.team_id );
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body);
    });
}

exports.getTeamsByLeague = function(req, res) {
    let datatype = 'team';
    let request = unirest("GET", API.url + 'teams/league/' + req.params.league_id );
    request.headers(API.headers);
    request.then(function (APIresponse){
        APIresponse.body.datatype = datatype
        res.json(APIresponse.body);
    });
}