const router = require('express').Router();
const {
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

const { route } = require('./user-routes');

// Get all thoughts 
router.route('/').get(getAllThoughts);

// Find thought by userID
router.route('/:userId').post(addThought);

// Get thought by userID and update
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

// Remove thought
router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

// Create a reaction
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// Delete a reaction
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;