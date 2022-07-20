const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// Get all and Post all route for users
router
    .route('/')
    .get()
    .post();

// Update or delete user route
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// create or delete friend
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

// Get all users or create user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

module.exports = router;