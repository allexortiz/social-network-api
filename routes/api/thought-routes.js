// Import the Express router module
const router = require("express").Router();

// Import controller methods from the thought-controller file
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// Define routes for the '/api/thoughts' endpoint
router.route("/")
  .get(getAllThought)  // GET request to get all thoughts
  .post(createThought);  // POST request to create a new thought

// Define routes for the '/api/thoughts/:id' endpoint
router.route("/:id")
  .get(getThoughtById)  // GET request to get a thought by ID
  .put(updateThought)   // PUT request to update a thought by ID
  .delete(deleteThought);  // DELETE request to delete a thought by ID

// Define routes for the '/api/thoughts/:thoughtId/reactions' endpoint
router.route("/:thoughtId/reactions")
  .post(addReaction)   // POST request to add a reaction to a thought

// Define route for the '/api/thoughts/:thoughtId/reactions/:reactionId' endpoint
router.route("/:thoughtId/reactions/:reactionId")
  .delete(removeReaction);  // DELETE request to remove a reaction from a thought

// Export the configured router for use in other parts of the application
module.exports = router;