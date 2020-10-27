'use strict';
module.exports = function(app) {
    let team = require('../controllers/teamController.js');
    let cache = require('../cache/cache');
    
    // todoList Routes
    app.route('/team/:team_id')
        .get(team.getTeam)
    
        app.route('/teamsByLeague/:league_id')
        .get(cache.cache(604800), team.getTeamsByLeague)
};