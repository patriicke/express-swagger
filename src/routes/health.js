const router = require("express").Router();

/**
 * @swagger
 * /health:
 *  get:
 *    tags: [Health]
 *    description: Get health status
 *    responses:
 *      '200':
 *        description: Health check is successful
 
 */
router.get("/", (req, res) => res.json({ status: "Server is up and running" }));

module.exports = router;
