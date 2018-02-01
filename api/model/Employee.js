'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    empID: {
        type: String,
        required: 'Please provide the employee\'s ID',
        unique: true
    },
    first_name: {
        type: String,
        required: 'Please provide first name'
    },
    last_name: {
        type: String,
        required: 'Please provide last name'
    },
    middle_name: {
        type: String
    },
    gender: {
        type: String,
        required: 'Please provide gender'
    },
    date_of_birth: {
        type: Date,
        required: 'Please provide DOB'
    },
    date_hired: {
        type: Date,
        required: 'Please provide Date Hired'
    },
    date_regular: {
        type: Date
    },
    date_resigned: {
        type: Date
    },
    emp_status: {
        type: String,
        required: 'Please provide employment status'
    },
    vl_credits: {
        type: Number,
        required: 'Please provide VL Credits'
    },
    sl_credits: {
        type: Number,
        required: 'Please provide SL Credits'
    },
    el_credits: {
        type: Number,
        required: 'Please provide SL Credits'
    },
    email_address: {
        type: String,
        required: 'Please provide your Gmail issued email address'
    },
    del_flag: {
        type: Number,
        default: 0
    }
}, { timestamps: true });


class EmployeeClass {
    get fullName() {
        return `${this.first_name} ${this.last_name}`;
    }
}

EmployeeSchema.loadClass(EmployeeClass);
module.exports = mongoose.model('EmployeeSchema', EmployeeSchema);