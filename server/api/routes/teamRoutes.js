'use strict';
module.exports = function(app) {
    let team = require('../controllers/teamController.js');

    // todoList Routes
    app.route('/team/:team_id')
        .get(team.getTeam)
    
        app.route('/teamsByLeague/:league_id')
        .get(team.getTeamsByLeague)
};