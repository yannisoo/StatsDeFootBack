'use strict';
var unirest = require("unirest");
const API = require("../apiValue/apiValue.js")

exports.getTeam = function(req, res) {
    let request = unirest("GET", API.url + 'v2/teams/team/' + req.params.team_id );
    request.headers(API.headers);
    request.then(function (APIresponse){
        res.json(APIresponse.body.api);
    });
}

