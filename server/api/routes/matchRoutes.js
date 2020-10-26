'use strict';
module.exports = function(app) {
    let match = require('../controllers/matchController.js');


    app.route('/previsousMatchesBetween2teams/:team1/:team2')
        .get(match.previsousMatchesBetween2teams)

    app.route('/last5MatchesOfATeam/:team')
        .get(match.last5MatchesOfATeam)

    app.route('/matchById/:id')
        .get(match.matchById)

    app.route('/matchByDate/:date')
        .get(match.matchByDate)

    app.route('/next10MatchesByLeague/:id')
        .get(match.next10MatchesByLeague)
};