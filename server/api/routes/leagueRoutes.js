'use strict';
module.exports = function(app) {
    let league = require('../controllers/leagueController.js');

    // todoList Routes
    app.route('/leaguesByCountry/:country')
        .get(league.getLeaguesByCountry)

};