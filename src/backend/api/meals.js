const express = require("express");
const routerMeals = express.Router();
const knex = require("../database");

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

routerMeals.get("/:Id", async (req, res) => {
  try {
    const Id = parseInt(req.params.Id);
    const mealId = await knex("Meal").select("*").where("Id", "=", Id);
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

routerMeals.put("/:Id", async (req, res) => {
  try {
    const Id = parseInt(req.params.Id);
    const mealId = await knex("Meal").where({ Id: Id }).update(req.body);
    if (mealId) {
      res.status(202).json({ message: "This shit changed" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error while updating the meal",
    });
  }
});

routerMeals.delete("/:Id", async (req, res) => {
  try {
    const Id = parseInt(req.params.Id);
    await knex("Meal").where({ Id: Id }).del();
    res.status(200).json({ message: "This shit deleted" });
  } catch (error) {
    res.status(500).json({
      error: "Error while deleting the meal",
    });
  }
});

module.exports = routerMeals;
