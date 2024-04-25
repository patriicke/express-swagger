const express = require("express");
const app = express();

const routes = require("./routes");

app.use(express.json());
app.use("/", routes);

const port = process.env.PORT || 8090;

require("./swagger-setup")(app);

app.listen(port, () => {
  console.log("Server running on: http://localhost:" + port);
});
