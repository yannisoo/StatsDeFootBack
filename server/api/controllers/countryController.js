'use strict';
var unirest = require("unirest");
const API = require("../apiValue/apiValue.js");


exports.getAll = function(req, res) {
    let datatype = 'country'
    let request = unirest("GET", API.url + 'countries');
    request.headers(API.headers);
    request.then(function (APIresponse){
        console.log(APIresponse.body)
        APIresponse.body.datatype = datatype
        res.json(APIresponse.body);
    })
        
};


