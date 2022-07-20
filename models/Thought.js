const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');


// thought schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1, 
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        },
        // tying reactions to thought
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of friends
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// create the User model using the UserSchema
const Thought = model('Thought', thoughtSchema);

// export the User model
module.exports = { Thought };