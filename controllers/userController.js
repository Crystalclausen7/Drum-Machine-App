const db = require("../models/index.js")
const User = require("../models/users")

module.exports = {
    findAll: function (req, res) {
        User.find({})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    },
    findOne: function (req, res) {
        User.find({ user: req.params.user })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    },
    createNewUser: function (req, res) {
        User.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    }
}