const express = require("express");
const routerReviews = express.Router();
const knex = require("../database");

routerReviews.get("/", async (req, res) => {
  try {
    const allReservations = await knex("Review").select("*");
    if (!allReservations.length) {
      res.status(404).json({ error: "That shit doesn’t exist." });
    }
    res.json(allReservations);
  } catch (error) {
    res.status(500).json({
      error: "Error while looking for the review",
    });
  }
});

routerReviews.get("/:Id", async (req, res) => {
  try {
    const Id = parseInt(req.params.Id);
    const mealId = await knex("Review").select("*").where("Id", "=", Id);
    if (!mealId.length) {
      res.status(404).json({ error: "That shit doesn’t exist" });
    }
    res.json(mealId);
  } catch (error) {
    res.status(500).json({
      error: "Error while looking for the review",
    });
  }
});

routerReviews.post("/", async (req, res) => {
  try {
    await knex("Review").insert(req.body);
    res.status(201).json({ message: "Your review  successful" });
  } catch (error) {
    res.status(500).json({
      error: "Error while making review",
    });
  }
});

routerReviews.put("/:Id", async (req, res) => {
  try {
    const Id = parseInt(req.params.Id);
    const mealId = await knex("Review").where({ Id: Id }).update(req.body);
    if (mealId) {
      res.status(202).json({ message: "This shit changed" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error while updating the review",
    });
  }
});

routerReviews.delete("/:Id", async (req, res) => {
  try {
    const Id = parseInt(req.params.Id);
    await knex("Review").where({ Id: Id }).del();
    res.status(200).json({ message: "This shit deleted" });
  } catch (error) {
    res.status(500).json({
      error: "Error while deleting the review",
    });
  }
});

module.exports = routerReviews;
