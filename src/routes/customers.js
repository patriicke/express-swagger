const customers = require("express").Router();

const customersData = [
  { id: 1, name: "Jane" },
  { id: 2, name: "Doe" }
];

/**
 * @swagger
 * /customers:
 *  get:
 *    tags: [Customers]
 *    description: Get a list of customers
 *    responses:
 *      '200':
 *        description: Getting customers successfully
 *  tags: customers
 */
customers.get("/", (req, res) => res.json(customersData));

/**
 * @swagger
 * /customers/{id}:
 *  get:
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id of customer
 *        required: true
 *        type: integer
 *    tags: [Customers]
 *    description: Get customer by id
 *    responses:
 *      '200':
 *        description: Customer found successfully
 */
customers.get("/:id", (req, res) => res.json(customersData[req.params.id]));

module.exports = customers;
