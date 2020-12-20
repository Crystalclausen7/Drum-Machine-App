const router = require("express").Router()
const userController = require("../controllers/userController")

router.route("/users")
    .get(userController.findAll)
    .post(userController.createNewUser)

router.route("/:user")
    .get(userController.findOne)
module.exports = router