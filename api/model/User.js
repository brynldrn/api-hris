var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    user_id: {
        type: String,
        required: 'Please provide the User ID'
    },
    first_name: {
        type: String,
        required: 'Please provide first name'
    },
    last_name: {
        type: String,
        required: 'Please provide last name'
    },
    username: {
        type: String,
        required: 'Please provide username',
        unique: true
    },
    email: {
        type: String,
        required: 'Please provide email',
        unique: true
    },
    password: {
        type: String,
        required: 'Please provide password'
    },
    role: {
        type: String,
        required: 'Please provide the user\'s role'
    }
}, { timestamps: true });

module.exports = mongoose.model('UserSchema', UserSchema);