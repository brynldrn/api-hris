'user strict';

var mongoose = require('mongoose'),
    Leave = mongoose.model('LeaveSchema');

exports.leave_get_all = function (req, res) {
    Leave.find({ leave_status: 'PENDING' }, function (err, task) {
        if (err)
        res.send(err);
        res.json(task);
    });
}

exports.leave_get_history = function (req, res) {
    Leave.find({ leave_status: { $in: ['APPROVED', 'REJECTED'] } }, function (err, task) {
        if (err)
        res.send(err);
        console.log(task)
        res.json(task);
    });
}

exports.leave_apply = function (req, res) {
    var leave_application = new Leave(req.body);
    leave_application.save(function (err, task) {
        if (err) 
        res.send(err);
        res.json(task);
    });
}

exports.leave_cancel = function (req, res) {
    Leave.findByIdAndUpdate({ _id: req.params.id }, { $set: { leave_status: 'CANCELLED' } }, function (err, task) {
        if(err)
        res.send(err);
        res.json(task);
    });
}

exports.leave_approve = function (req, res) {
    Leave.findByIdAndUpdate({ _id: req.params.idArray }, { $set: { leave_status: 'APPROVED' } }, function (err, task) {
        if(err)
        res.send(err);
        res.json(task);
    });
}

exports.leave_reject = function (req, res) {
    Leave.findByIdAndUpdate({ _id: req.params.idArray }, { $set: { leave_status: 'REJECTED' } }, function (err, task) {
        if(err)
        res.send(err);
        res.json(task);
    });
}