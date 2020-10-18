'use strict';
module.exports = function(app) {
    let match = require('../controllers/matchController.js');

    // todoList Routes
    app.route('/previsousMatchesBetween2teams/:team1/:team2')
        .get(match.previsousMatchesBetween2teams)

};