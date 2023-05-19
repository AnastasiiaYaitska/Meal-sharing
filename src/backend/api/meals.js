const express = require("express");
const routerMeals = express.Router();
const knex = require("../database");

routerMeals.get("/", async (req, res) => {
  try {
    const allMeals = await knex("Meal")
      .select(
        "Meal.*",
        knex.raw("SUM(Reservation.Number_of_guests) AS Total_reservations")
      )
      .leftJoin("Reservation", "Meal.Id", "=", "Reservation.Meal_id")
      .groupBy("Meal.Id");

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
    const meal = await knex("Meal")
      .select(
        "Meal.*",
        knex.raw("SUM(Reservation.Number_of_guests) AS Total_reservations")
      )
      .leftJoin("Reservation", "Meal.Id", "=", "Reservation.Meal_id")
      .groupBy("Meal.Id")
      .where("Meal.Id", id);

    res.json(meal);
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
