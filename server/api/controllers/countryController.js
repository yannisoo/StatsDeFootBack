'use strict';
var unirest = require("unirest");
const API = require("../apiValue/apiValue.js")

exports.getAll = function(req, res) {
    let datatype = 'country'
    let request = unirest("GET", API.url + 'v2/countries');
    request.headers(API.headers);
    request.then(function (APIresponse){
        APIresponse.body.api.datatype = datatype
        res.json(APIresponse.body.api);
    })
        
};


