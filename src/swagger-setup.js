const swaggerDefinition = {
  info: {
    title: "Express REST API",
    description: "Express Swagger API Documentation"
  },
  servers: ["http://localhost:8080"]
};

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition,
  apis: ["src/routes/**/*.js"]
};

const setup = (app) =>
  app.use(
    "/swagger",
    swaggerUi.serve,
    swaggerUi.setup(swaggerJsDoc(swaggerOptions))
  );

module.exports = setup;
