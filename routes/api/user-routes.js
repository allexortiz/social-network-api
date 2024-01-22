// Import the Express router module
const router = require("express").Router();

// Import controller methods from the user-controller file
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// Define routes for the '/api/users' endpoint
router.route("/")
  .get(getAllUser)  // GET request to get all users
  .post(createUser);  // POST request to create a new user

// Define routes for the '/api/users/:id' endpoint
router.route("/:id")
  .get(getUserById)  // GET request to get a user by ID
  .put(updateUser)   // PUT request to update a user by ID
  .delete(deleteUser);  // DELETE request to delete a user by ID

// Define route for the '/api/users/:userId/friends/:friendId' endpoint
router.route("/:userId/friends/:friendId")
  .post(addFriend)   // POST request to add a friend to a user
  .delete(removeFriend);  // DELETE request to remove a friend from a user

// Export the configured router for use in other parts of the application
module.exports = router;