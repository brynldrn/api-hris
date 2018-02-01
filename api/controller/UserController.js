'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('UserSchema');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

exports.user_all = function (req, res) {
    User.find({}, function (err, task) {
        if (err)
        res.send(err);
        res.json(task);
    });
}

exports.user_add = function (req, res) {
    var new_user = new User(req.body);

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(new_user.password, salt, function(err, hash) {
            new_user.password = hash;
            new_user.save(function (err, task) {
                if (err)
                res.send(err);
                res.json(task);
            });
        });
    });
}

exports.user_findById = function (req, res) {
    User.findById(req.params.id = _id, function (err, task) {
        if (err)
        res.send(err);
        res.json(task);
    });
}

exports.user_auth = function (req, res) {
    User.findOne({username: req.body.username}, function (err, task) {
        if (err) res.send(err);
        if (!task) res.json({ success: false, message: 'User not found' });
        if (task) {
            bcrypt.compare(req.body.password, task.password, function(err, isMatch) {
                if(!isMatch) {
                    res.json({ success: false, message: 'Incorrect Password' });
                } else {
                    var token = jwt.sign({
                        success: true,
                        user: task
                    }, 'lordvoldemort', { expiresIn: '1m', issuer: 'PhaseP_HRIS_Auth' });
                    console.log(token);
                    res.json({ success: true, message: 'User Authenticated', token: token });
                }
            });
        } 
    })
}