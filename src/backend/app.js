const express = require("express");
const app = express();
const router = express.Router();
// require("dotenv").config();

const path = require("path");
const knex = require("./database");
const mealsRouter = require("./api/meals");
// const reservationsRouter = require("./api/reservations");
const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use("/meals", mealsRouter);

///
// router.use("/reservations", reservationsRouter);

router.get("/:type", cors(), async (req, res) => {
  const { type } = req.params;
  let query;

  switch (type) {
    case "future-meals":
      query = knex.raw("SELECT * FROM Meal WHERE 'when'>'GETDATE()'");
      break;
    case "past-meals":
      query = knex.raw("SELECT * FROM Meal WHERE 'when'<'GETDATE()'");
      break;
    case "all-meals":
      query = knex.raw("SELECT * FROM Meal ORDER BY Id");
      break;
    case "first-meal":
      query = knex.raw(
        "SELECT * FROM Meal WHERE id = (SELECT MIN(id) FROM Meal)"
      );
      break;
    case "last-meal":
      query = knex.raw(
        "SELECT * FROM Meal WHERE id = (SELECT MAX(id) FROM Meal)"
      );
      break;
    default:
      return res.status(400).send("Incorrect request");
  }
  try {
    const resultOfQuery = await query;
    if (
      resultOfQuery.length === 0 &&
      (type === "first-meal" || type === "last-meal")
    ) {
      return res.status(404).send("Meal Not Found!");
    }
    return res.json(resultOfQuery[0]);
  } catch (error) {
    res.status(500).send(err);
  }
});

// if (process.env.API_PATH) {
//   app.use(process.env.API_PATH, router);
// } else {
//   throw "API_PATH is not set. Remember to set it in your .env file";
// }

app.use("/api", router);

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
