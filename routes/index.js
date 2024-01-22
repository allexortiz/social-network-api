// Import the Express router module
const router = require("express").Router();

// Import the 'apiRoutes' from the "./api" directory
const apiRoutes = require("./api");

// Use the 'apiRoutes' for any routes starting with "/api"
router.use("/api", apiRoutes);

// Middleware for handling 404 errors (page not found)
router.use((req, res) => {
  res.status(404).send("<h1>404 Error!</h1>");  // Send a 404 response with a simple HTML message
});

// Export the configured router for use in other parts of the application
module.exports = router;