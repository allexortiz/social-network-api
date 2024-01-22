// Import necessary modules from mongoose
const { Schema, model } = require("mongoose");

// Define a new mongoose schema for the User model
const UserSchema = new Schema(
    {
        // Define the 'username' field with specified properties
        username: {
            type: String,
            unique: true,    // Ensure uniqueness
            trim: true,      // Trim whitespace
            required: "Username is Required",  // Required field with error message
        },

        // Define the 'email' field with specified properties
        email: {
            type: String,
            unique: true,    // Ensure uniqueness
            required: "Username is Required",  // Required field with error message
            match: [/.+@.+\..+/],  // Use regex pattern for email validation
        },

        // Define the 'thoughts' field as an array of ObjectIds referencing the 'Thought' model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",  // Reference the 'Thought' model
            },
        ],

        // Define the 'friends' field as an array of ObjectIds referencing the 'User' model
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",  // Reference the 'User' model
            },
        ],
    },
    {
        // Define toJSON options for the schema
        toJSON: {
            virtuals: true,  // Include virtual properties when converting to JSON
        },
        id: false,  // Exclude the default '_id' field from the JSON representation
    }
);

// Define a virtual property 'friendCount' for the User model
UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;  // Calculate the number of friends
});

// Create a model named 'User' using the UserSchema
const User = model("User", UserSchema);

// Export the 'User' model
module.exports = User;