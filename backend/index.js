const express = require("express");
// const todos_routes = require("./routes/todos.js");
const cors = require("cors");
const app = express();

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

const logger = (req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  if (req.body) {
    console.log(JSON.parse(req.body));
  }
  next();
};

//Middlewares
app.use(logger);
app.use(express.json());
app.use(cors());

// Routes
//app.use("/api/v1/todos", todos_routes);
