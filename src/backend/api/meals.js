const express = require("express");
const routerMeals = express.Router();
const knex = require("../database");

// routerMeals.get("/", async (req, res) => {
//   try {
//     const allMeals = await knex("Meal")
//       .select(
//         "Meal.*",
//         knex.raw("SUM(Reservation.Number_of_guests) AS Total_reservations")
//       )
//       .leftJoin("Reservation", "Meal.Id", "=", "Reservation.Meal_id")
//       .groupBy("Meal.Id");

//     res.json(allMeals);
//   } catch (error) {
//     res.status(500).json({
//       error: "Error while looking for the meal",
//     });
//   }
// });

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

/**
|--------------------------------------------------
| week3 nodejs
|--------------------------------------------------
*/

routerMeals.get("/", async (req, res) => {
  try {
    const query = req.query;
    const {
      maxPrice,
      availableReservations,
      title,
      dateAfter,
      dateBefore,
      limit,
      sortKey,
      sortDir,
    } = req.query;

    console.log(query);

    let meals_result = [];
    if (Object.keys(query).length > 0) {
      console.log("Hi");
      // Returns all meals that are cheaper than maxPrice
      if (maxPrice !== undefined) {
        const result = await knex("Meal")
          .select("*")
          .where("Price", "<=", +maxPrice);
        meals_result.push(result);
      }

      // Returns all meals that still have available spots left, if true. If false, return meals that have no available spots left.

      if (availableReservations !== undefined) {
        const result = await knex("Meal").where(
          "Max_reservations",
          ">",
          knex.raw(
            "(SELECT SUM(Number_of_guests) FROM Reservation WHERE Meal_id = Meal.Id)"
          )
        );
        meals_result.push(result);
      }

      // Returns all meals that partially match the given title. Rød grød will match the meal with the title Rød grød med fløde
      if (title) {
        const result = await knex("Meal")
          .select("*")
          .where("Title", "like", `%${title}%`);
        meals_result.push(result);
      }

      // Returns all meals where the date for when is after the given date.
      if (dateAfter) {
        const result = await knex("Meal")
          .select("*")
          .where("When", ">", dateAfter);
        meals_result.push(result);
      }

      // Returns all meals where the date for when is before the given date
      if (dateBefore) {
        const result = await knex("Meal")
          .select("*")
          .where("When", "<", dateBefore);
        meals_result.push(result);
      }

      // Returns the given number of meals.
      if (limit) {
        const result = await knex("Meal").select("*").limit(limit);
        meals_result.push(result);
      }

      // Apply sorting
      if (sortKey) {
        const direction = sortDir === "desc" ? "desc" : "asc";
        const result = await knex("Meal")
          .select("*")
          .orderBy(sortKey, direction);
        meals_result.push(result);
      }
      console.log(meals_result);
      res.json(meals_result);
    } else {
      // const allMeals = await knex("Meal").select("*");
      // console.log(allMeals);
      // res.json(allMeals);
      const allMeals = await knex("Meal")
        .select(
          "Meal.*",
          knex.raw("SUM(Reservation.Number_of_guests) AS Total_reservations")
        )
        .leftJoin("Reservation", "Meal.Id", "=", "Reservation.Meal_id")
        .groupBy("Meal.Id");
      res.json(allMeals);
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = routerMeals;
