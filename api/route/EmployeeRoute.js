'use strict';

module.exports = function (app) {
    var employee = require('../controller/EmployeeController');

    app.route('/api/v1/employee')
        .get(employee.employee_all)
        .post(employee.employee_add);
    
    app.route('/api/v1/employee/find/:id')
        .get(employee.employee_find_one);
    
    app.route('/api/v1/employee/delete/:empID')
        .post(employee.employee_delete);

    app.route('/api/v1/employee/update/:empID')
        .put(employee.employee_update);
}