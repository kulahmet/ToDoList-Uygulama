module.exports = app => {
  const todoitems = require("../controllers/todoitem.controller.js");

  var router = require("express").Router();

  // Create a new todo item
  router.post("/", todoitems.create);

  // Retrieve all todo items
  router.get("/", todoitems.findAll);

  // Retrieve all completed todo items
  router.get("/completed", todoitems.findAllCompleted);

  // Retrieve a single todo item with id
  router.get("/:id", todoitems.findOne);

  // Update a todo item with id
  router.put("/:id", todoitems.update);

  // Delete a todo item with id
  router.delete("/:id", todoitems.delete);

  // Delete all todo items
  router.delete("/", todoitems.deleteAll);

  app.use('/api/todoitems', router);
};