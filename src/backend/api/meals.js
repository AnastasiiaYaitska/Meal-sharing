const express = require("express");
const routerMeals = express.Router();
const knex = require("../database");

// router.get("/", async (request, response) => {
//   try {
//     // knex syntax for selecting things. Look up the documentation for knex for further info
//     const titles = await knex("Meals").select("Title");
//     response.json(titles);
//   } catch (error) {
//     throw error;
//   }
// });
routerMeals.get("/", async (req, res) => {
  try {
    const allMeals = await knex("Meal").select("*");
    if (!allMeals.length) {
      res.status(404).json({ error: "That shit doesn’t exist." });
    }
    res.json(allMeals);
  } catch (error) {
    res.status(500).json({
      error: "Error while looking for the meal",
    });
  }
});

routerMeals.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const mealId = await knex("Meal").select("*").where("Id", "=", id);
    if (!mealId.length) {
      res.status(404).json({ error: "That shit doesn’t exist" });
    }
    res.json(mealId);
  } catch (error) {
    res.status(500).json({
      error: "Error while looking for the meal",
    });
  }
});

routerMeals.post("/", async (req, res) => {
  try {
    await knex("Meal").insert(req.body);
    res.status(201).json({ message: "Look Mum, I made a thing" });
  } catch (error) {
    res.status(500).json({
      error: "Error while looking for the meal",
    });
  }
});

routerMeals.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const mealId = await knex("Meal").where({ Id: id }).update(req.body);
    if (mealId) {
      res.status(202).json({ message: "This shit changed" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error while updating the meal",
    });
  }
});

routerMeals.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await knex("Meal").where({ Id: id }).del();
    res.status(200).json({ message: "This shit deleted" });
  } catch (error) {
    res.status(500).json({
      error: "Error while deleting the meal",
    });
  }
});

module.exports = routerMeals;
