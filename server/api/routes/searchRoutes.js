'use strict';
module.exports = function(app) {
    let search = require('../controllers/searchController.js');

    // todoList Routes
    app.route('/searchTeam/:name')
        .get(search.searchTeam)

    app.route('/searchCoach/:name')
        .get(search.searchCoach)

    app.route('/searchLeague/:name')
    .get(search.searchLeague)

    app.route('/searchPlayer/:name')
    .get(search.searchPlayer)

};