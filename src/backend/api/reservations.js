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

routerReservation.post("/meals", async (request, response) => {
  try {
    const context = request.body;
    const requiredParams = [
      "number_of_guests",
      "created_date",
      "contact_phonenumber",
      "contact_name",
      "contact_email",
      "meal_id",
    ];
    console.log("context", context);
    const numberOfGuests = Number(context.number_of_guests);
    const mealId = Number(context.meal_id);
    console.log("mealId", mealId);

    console.log("numberOfGuests", numberOfGuests);

    meal = await knex("meals")
      .select(
        "meals.id",
        "meals.title",
        "meals.description",
        "meals.location",
        "meals.when",
        "meals.created_date",
        "meals.price",
        "meals.max_reservations",
        knex.raw(
          "(meals.max_reservations-COALESCE(SUM(reservations.number_of_guests),0)) as available_reservation"
        )
      )
      .where("meals.id", "=", mealId)
      .leftJoin("reservations", "meals.id", "=", "reservations.meal_id");
    const currentMeal = meal[0];
    const avRes = currentMeal.available_reservation;
    console.log("currentMeal", currentMeal);
    console.log("avRes", avRes);

    if (Object.keys(context).length === requiredParams.length) {
      if (Number(avRes) < numberOfGuests) {
        response.status(200).json({
          message: `Sorry. Not enough available seats on ${currentMeal.title}. It has ${avRes} available seats`,
        });
      } else {
        const insertContext = await knex("reservations").insert(context);
        response.send(`Thanks for your reservation`).json(insertContext);
      }
    } else {
      requiredParams.map((param) => {
        if (context[param] === "" || context[param] === undefined) {
          response.status(422).json({
            message: "Bad input",
            hint: `Please, provide ${param}`,
          });
        }
      });
    }
  } catch (error) {
    throw error;
  }
});

module.exports = routerReservation;
