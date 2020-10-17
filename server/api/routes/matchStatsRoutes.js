'use strict';
module.exports = function(app) {
    let matchStats = require('../controllers/matchStatsController.js');

    // todoList Routes
    app.route('/matchStats/:fixtures_id')
        .get(matchStats.getMatchStats)

};