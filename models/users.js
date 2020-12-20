const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 12,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    }
})

module.exports = mongoose.model("User", UsersSchema)