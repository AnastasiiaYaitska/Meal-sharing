const express = require("express");
const routerMeals = express.Router();
const knex = require("../database");

/**
|--------------------------------------------------
| week2 nodejs
|--------------------------------------------------
*/

// routerMeals.get("/", async (req, res) => {
//   try {
//     const allMeals = await knex("Meal").select("*");
//     if (!allMeals.length) {
//       res.status(404).json({ error: "That shit doesn’t exist." });
//     }
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

    if (query) {
      // Returns all meals that are cheaper than maxPrice
      if (maxPrice !== undefined) {
        const result = await knex("Meal")
          .select("*")
          .where("Price", "<=", +maxPrice);
        res.json(result);
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
        res.json(result);
      }

      // Returns all meals that partially match the given title. Rød grød will match the meal with the title Rød grød med fløde
      if (title) {
        console.log("title !== undefined");
        const result = await knex("Meal")
          .select("*")
          .where("Title", "like", `%{title}%`);
        res.json(result);
      }

      // Returns all meals where the date for when is after the given date.
      if (dateAfter) {
        const result = await knex("Meal")
          .select("*")
          .where("When", ">", dateAfter);
        res.json(result);
      }

      // Returns all meals where the date for when is before the given date
      if (dateBefore) {
        const result = await knex("Meal")
          .select("*")
          .where("When", "<", dateBefore);
        res.json(result);
      }

      // Returns the given number of meals.
      if (limit) {
        const result = await knex("Meal").select("*").limit(limit);
        res.json(result);
      }

      // Apply sorting
      if (sortKey) {
        const direction = sortDir === "desc" ? "desc" : "asc";
        const result = await knex("Meal")
          .select("*")
          .orderBy(sortKey, direction);
        res.json(result);
      }
    }

    const allMeals = await knex("Meal").select("*");
    res.json(allMeals);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = routerMeals;
