'use strict';
module.exports = function(app) {
    let country = require('../controllers/countryController.js');

    // todoList Routes
    app.route('/country')
        .get(country.getAll)

};