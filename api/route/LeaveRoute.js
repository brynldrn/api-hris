'use strict';

module.exports = function (app) {
    var leave = require('../controller/LeaveController');

    app.route('/api/v1/leave/')
        .get(leave.leave_get_all)
        .post(leave.leave_apply);
        
    app.route('/api/v1/leave-history')
        .get(leave.leave_get_history);

    app.route('/api/v1/leave/cancel/:id')
        .put(leave.leave_cancel);

    app.route('/api/v1/leave/approve/:idArray')
        .put(leave.leave_approve);

    app.route('/api/v1/leave/reject/:idArray')
        .put(leave.leave_reject);
}