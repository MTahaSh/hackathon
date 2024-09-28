const express = require("express");

const router = express.Router();
const {getAllUsers, getUserById, createUser, updateUserById, deleteUserById} = require("../controllers/user")

router.route("/").get(getAllUsers).post(createUser);


router.route("/:id").get(getUserById).patch(updateUserById).delete(deleteUserById);



module.exports = router;