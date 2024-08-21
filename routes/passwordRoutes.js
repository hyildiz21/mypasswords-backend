const express = require("express");
const router = express.Router();
const {getPasswords, createPassword, getPassword, updatePassword, deletePassword} = require("../controllers/passwordController");

router.route("/").get(getPasswords).post(createPassword);
router.route("/:id").get(getPassword).put(updatePassword).delete(deletePassword);

module.exports = router;