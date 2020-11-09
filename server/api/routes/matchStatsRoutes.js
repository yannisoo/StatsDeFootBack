'use strict';
module.exports = function(app) {
    let matchStats = require('../controllers/matchStatsController.js');
    let cache = require('../cache/cache');
    
    // todoList Routes
    app.route('/matchStats/:fixtures_id')
        .get(cache.cache(86400), matchStats.getMatchStats)
};