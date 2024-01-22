// Import the Express router module
const router = require("express").Router();

// Import the 'userRoutes' from the "./user-routes" file
const userRoutes = require("./user-routes");

// Import the 'thoughtRoutes' from the "./thought-routes" file
const thoughtRoutes = require("./thought-routes");

// Use the 'userRoutes' for any routes starting with "/users"
router.use("/users", userRoutes);

// Use the 'thoughtRoutes' for any routes starting with "/thoughts"
router.use("/thoughts", thoughtRoutes);

// Export the configured router for use in other parts of the application
module.exports = router;