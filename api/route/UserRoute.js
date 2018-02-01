'use strict';

module.exports = function (app) {
    var user = require('../controller/UserController');

    app.route('/api/v1/user')
        .get(user.user_all)
        .post(user.user_add);
    
    app.route('/api/v1/user/:id')
        .get(user.user_findById);
    
    app.route('/api/v1/user/auth/')
        .post(user.user_auth);
}