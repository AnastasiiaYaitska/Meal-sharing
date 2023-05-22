const express = require("express");
const routerReservation = express.Router();
const knex = require("../database");

routerReservation.get("/", async (req, res) => {
  try {
    const allReservations = await knex("Reservation").select("*");
    if (!allReservations.length) {
      res.status(404).json({ error: "That shit doesn’t exist." });
    }
    res.json(allReservations);
  } catch (error) {
    res.status(500).json({
      error: "Error while looking for the reservation",
    });
  }
});

routerReservation.get("/:Id", async (req, res) => {
  try {
    const Id = parseInt(req.params.Id);
    const mealId = await knex("Reservation").select("*").where("Id", "=", Id);
    if (!mealId.length) {
      res.status(404).json({ error: "That shit doesn’t exist" });
    }
    res.json(mealId);
  } catch (error) {
    res.status(500).json({
      error: "Error while looking for the reservation",
    });
  }
});

routerReservation.post("/", async (req, res) => {
  try {
    await knex("Reservation").insert(req.body);
    res.status(201).json({ message: "Your reservation  successful" });
  } catch (error) {
    res.status(500).json({
      error: "Error while making reservation",
    });
  }
});

routerReservation.put("/:Id", async (req, res) => {
  try {
    const Id = parseInt(req.params.Id);
    const mealId = await knex("Reservation").where({ Id: Id }).update(req.body);
    if (mealId) {
      res.status(202).json({ message: "This shit changed" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error while updating the reservation",
    });
  }
});

routerReservation.delete("/:Id", async (req, res) => {
  try {
    const Id = parseInt(req.params.Id);
    await knex("Reservation").where({ Id: Id }).del();
    res.status(200).json({ message: "This shit deleted" });
  } catch (error) {
    res.status(500).json({
      error: "Error while deleting the reservation",
    });
  }
});

module.exports = routerReservation;
