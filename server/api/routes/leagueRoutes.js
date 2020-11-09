'use strict';
module.exports = function(app) {
    let league = require('../controllers/leagueController.js');
    let cache = require('../cache/cache');
    
    // todoList Routes
    app.route('/leaguesByCountry/:country')
        .get(cache.cache(604800),league.getLeaguesByCountry)

    // todoList Routes


};