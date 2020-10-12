'use strict';
module.exports = function(app) {
    let league = require('../controllers/leagueController.js');

    // todoList Routes
    app.route('/leaguesByCountry/:country')
        .get(league.getLeaguesByCountry)

    // todoList Routes
    app.route('/teamsByLeague/:league_id')
        .get(league.getTeamsByLeague)

};