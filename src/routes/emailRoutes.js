const router = require("express").Router();
const Email = require("../controller/emailController");

/** email routes */

router.post("/send", Email.emailController.send);
router.get("/test", Email.emailController.test);

module.exports = { path: "/api/", router };
