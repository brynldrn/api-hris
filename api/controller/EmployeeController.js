'use strict';

var mongoose = require('mongoose');
var Employee = mongoose.model('EmployeeSchema');

exports.employee_all = function (req, res) {
    Employee.find({ del_flag: 0 }, function (err, task) {
        if (err)
        res.send(err);
        res.json(task);
    })
}

exports.employee_find_one = function (req, res) {
    Employee.findById({ _id: req.params.id }, function (err, task) {
        if (err)
        res.send(err);
        res.json(task);
    });
}

exports.employee_add = function (req, res) {
    var newEmployee = new Employee(req.body);
    newEmployee.save(function (err, task) {
        if (err)
        res.send(err);
        res.json(task);
    })
}

exports.employee_update = function (req, res) {
    Employee.findOneAndUpdate({ empID: req.params.empID }, req.body, function (err, task) {
        if (err)
        res.send(err);
        res.json(task);
    });
}

exports.employee_delete = function (req, res) {
    Employee.findOneAndUpdate({ empID: req.params.empID }, { $set: {del_flag: 1, date_resigned: new Date()} }, function(err, task) {
        if (err)
        res.send(err);
        res.json(task);
    });
}