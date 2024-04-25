const router = require("express").Router();

const customers = require("./customers");
const users = require("./users");
const health = require("./health");

router.use("/health", health);
router.use("/users", users);
router.use("/customers", customers);

module.exports = router;
