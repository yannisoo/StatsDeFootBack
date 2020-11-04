'use strict';
var unirest = require("unirest");
const API = require("../apiValue/apiValue.js")

exports.getLeaguesByCountry = function(req, res) {
    let datatype = 'league';
    let country = req.params.country
    let request = unirest("GET", API.url + 'v2/leagues/country/' + req.params.country + '/2020');
    request.headers(API.headers);
    request.then(function (APIresponse){
        APIresponse.body.api.datatype = datatype
        APIresponse.body.api.country = country
        res.json(APIresponse.body.api);
    });
}




