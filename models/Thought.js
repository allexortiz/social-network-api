// Import necessary modules from mongoose
const { Schema, model, Types } = require("mongoose");

// Define a new mongoose schema for the Reaction model
const ReactionSchema = new Schema({
    // Define the 'reactionId' field as an ObjectId with a default value generated using new Types.ObjectId()
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),  // Default to a new ObjectId
    },

    // Define the 'reactionBody' field as a required String with a maximum length constraint
    reactionBody: {
        type: String,
        required: true,    // Required field
        maxlength: 280,    // Maximum length constraint
    },

    // Define the 'username' field as a required String
    username: {
        type: String,
        required: true,    // Required field
    },

    // Define the 'createdAt' field as a Date with a default value of the current date and time
    createdAt: {
        type: Date,
        default: Date.now,  // Default to the current date and time
        // Use a getter method to format the timestamp on query
    },
});

// Define a new mongoose schema for the Thought model
const ThoughtSchema = new Schema(
    {
        // Define the 'thoughtText' field with specified properties
        thoughtText: {
            type: String,
            required: "Thought is Required",  // Required field with error message
            minlength: 1,  // Minimum length constraint
            maxlength: 280,  // Maximum length constraint
        },

        // Define the 'createdAt' field as a Date with default value of current date and time
        createdAt: {
            type: Date,
            default: Date.now,  // Default to the current date and time
            // Use a getter method to format the timestamp on query
        },

        // Define the 'username' field as a required String
        username: {
            type: String,
            required: true,  // Required field
        },

        // Define the 'reactions' field as an array of ReactionSchema
        reactions: [ReactionSchema],
    },
    {
        // Define toJSON options for the schema
        toJSON: {
            virtuals: true,  // Include virtual properties when converting to JSON
        },
        id: false,  // Exclude the default '_id' field from the JSON representation
    }
);

// Define a virtual property 'reactionCount' for the Thought model
ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;  // Calculate the number of reactions
});

// Create a model named 'Thought' using the ThoughtSchema
const Thought = model("Thought", ThoughtSchema);

// Export the 'Thought' model
module.exports = Thought;