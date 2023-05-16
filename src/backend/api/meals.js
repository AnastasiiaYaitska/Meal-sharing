const express = require("express");
const routerMeals = express.Router();
const knex = require("../database");

/**
|--------------------------------------------------
| week2 nodejs
|--------------------------------------------------
*/

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

/**
|--------------------------------------------------
| week3 nodejs
|--------------------------------------------------
*/

routerMeals.get("/", async (req, res) => {
  try {
    const query = req.query;
    // const [keyQuery] = Object.keys(query);
    // const [valueQuery] = Object.values(query);
    const { maxPrice } = req.query;
    console.log(query);

    if (query) {
      if (maxPrice !== undefined) {
        const resoult = await knex("Meal")
          .select("Title", "Price")
          .where("Price", "<", +maxPrice);
        // if (maxPrice.length) {
        //   return res.json(resoult);
        // }
        res.json(resoult);
      }
      // switch (keyQuery) {
      //   case "maxPrice": // Returns all meals that are cheaper than maxPrice
      //     const maxPrice = await knex("Meal")
      //       .select("Title", "Price")
      //       .where("Price", "<", +valueQuery);
      //     if (maxPrice.length) {
      //       return res.json(maxPrice);
      //     }
      //     res.status(404).json({ error: "Not Found" });
      //     break;

      //   case "availableReservations": // Returns all meals that still have available spots left, if true. If false, return meals that have no available spots left.
      //     const availableReservations = await knex
      //       .select("Title", "status")
      //       .from("Meal")
      //       .where("status", "=", "available");
      //     const unavailableReservations = await knex
      //       .select("Title", "status")
      //       .from("Meal")
      //       .where("status", "=", "unavailable");
      //     if (valueQuery === "true") {
      //       if (availableReservations.length) {
      //         return res.json(availableReservations);
      //       }
      //       res.status(404).json({ error: "Not Found" });
      //     } else if (valueQuery === "false") {
      //       if (unavailableReservations.length) {
      //         return res.json(unavailableReservations);
      //       }
      //       res.status(404).json({ error: "Not Found" });
      //     } else {
      //       res.status(404).json({ error: "Not Found" });
      //     }
      //     break;

      //   case "title": // Returns all meals that partially match the given title. Rød grød will match the meal with the title Rød grød med fløde
      //     const title = await knex("Meal")
      //       .select("Title")
      //       .where("Title", "like", `%${valueQuery}%`);
      //     if (title.length) {
      //       return res.json(title);
      //     }
      //     res.status(404).json({ error: "Not Found" });
      //     break;

      //   case "dateAfter": // Returns all meals where the date for when is after the given date.
      //     const dateAfter = await knex("Meal")
      //       .select("Title", "date")
      //       .where("date", ">", valueQuery);
      //     if (dateAfter.length) {
      //       return res.json(dateAfter);
      //     }
      //     res.status(404).json({ error: "Not Found" });
      //     break;

      //   case "dateBefore": // Returns all meals where the date for when is before the given date
      //     const dateBefore = await knex("Meal")
      //       .select("Title", "When")
      //       .where("When", "<", valueQuery);
      //     if (dateBefore.length) {
      //       return res.json(dateBefore);
      //     }
      //     res.status(404).json({ error: "Not Found" });
      //     break;

      //   case "limit": // Returns the given number of meals.
      //     const limit = await knex("Meal").select("*").limit(+valueQuery);
      //     if (limit.length) {
      //       return res.json(limit);
      //     }
      //     res.status(404).json({ error: "Not Found" });
      //     break;

      //   case "sortKey":
      //     // Returns all meals sorted by the given key. Allows when, max_reservations and price as keys. Default sorting order is asc(ending).
      //     // Returns all meals sorted in the given direction. Only works combined with the sortKey and allows asc or desc.
      //     if (
      //       !query.sortDir &&
      //       (valueQuery === "Max_reservations" || valueQuery === "Price")
      //     ) {
      //       const sortKey = await knex("Meal")
      //         .select("Title", "Max_reservations", "Price")
      //         .orderBy(valueQuery);
      //       return res.json(sortKey);
      //     } else if (
      //       (query.sortKey === "Max_reservations" ||
      //         query.sortKey === "Price") &&
      //       (query.sortDir === "desc" || query.sortDir === "asc")
      //     ) {
      //       const sortDir = await knex("Meal")
      //         .select("Title", "Max_reservations", "Price")
      //         .orderBy(query.sortKey, query.sortDir);
      //       return res.json(sortDir);
      //     } else {
      //       res.status(404).json({ error: "Not Found" });
      //     }
      //     break;

      //   default:
      //     const allMeals = await knex("Meal").select("*");
      //     res.json(allMeals);
      // }
    }
  } catch (error) {
    throw error;
  }
});

module.exports = routerMeals;
