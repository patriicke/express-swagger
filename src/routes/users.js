const users = require("express").Router();

const usersData = [
  { id: 1, name: "Jane" },
  { id: 2, name: "Doe" }
];

/**
 * @swagger
 * /users:
 *  get:
 *    tags: [Users]
 *    description: Get a list of users
 *    responses:
 *      '200':
 *        description: Getting users successfully
 *  tags: users
 */
users.get("/", (req, res) => res.json(usersData));

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id of user
 *        required: true
 *        type: integer
 *    tags: [Users]
 *    description: Get user by id
 *    responses:
 *      '200':
 *        description: User found successfully
 */
users.get("/:id", (req, res) => res.json(usersData[req.params.id]));

module.exports = users;
