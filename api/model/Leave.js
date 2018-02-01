'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LeaveSchema = new Schema({
    leave_type: {
        type: String,
        required: 'Please provide the leave type.'
    },
    start_date: {
        type: Date,
        required: 'Please provide the start date.'
    },
    end_date: {
        type: Date,
        required: 'Please provide the end date.'
    },
    leave_note: {
        type: String,
        required: 'Please provide a note.'
    },
    leave_status: {
        type: String,
        required: 'Please provide the status of this leave item.'
    },
    empID: {
        type: String,
        required: 'Please specify the Employee ID.'
    },
    fullName: {
        type: String,
        required: 'Please provide the employee\'s name.'
    }
}, { timestamps: true });

module.exports = mongoose.model('LeaveSchema', LeaveSchema);