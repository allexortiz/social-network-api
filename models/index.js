// Import the 'User' model from the "./User" file
const User = require("./User");

// Import the 'Thought' model from the "./Thought" file
const Thought = require("./Thought");

// Import the 'Reaction' model from the "./Reaction" file
const Reaction = require("./Reaction");

// Export an object containing the 'User', 'Thought', and 'Reaction' models
module.exports = { User, Thought, Reaction };