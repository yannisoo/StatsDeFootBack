'use strict';
module.exports = function(app) {
    let country = require('../controllers/countryController.js');
    let cache = require('../cache/cache');

    // todoList Routes
    app.route('/country')
        .get(cache.cache(604800),country.getAll)

};