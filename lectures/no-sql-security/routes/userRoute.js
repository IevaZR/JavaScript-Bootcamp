import { countUsers, createUser, deleteUser, getAllUsers, getUser, limitUsers, loginUser, sortUsers, updateUser } from "../controllers/userController.js"; //don't forget to ad .js ad the end
import express from "express";
import { verifySessionToken } from "../middleweares/authenticationCheck.js";

const router = express.Router()


//we need to add a midelwear who can configure our routes, so that noone else cannot send these requests, if they know the routes (for example http://localhost:3005/get-all )
//we created a new folder named middleweares and a new file within it
//middlewear is a function between the route and the function. it is like a key to the door, it allows or denies opening the door to the function
//this middlewear checks whether there is a session token and if the route is allowed. and then we check if the user is admin
router.post('/create', createUser)
router.post('/login', loginUser)
router.get('/get-all', verifySessionToken, getAllUsers) //only for admins

//here we add the token created in authenticationCheck, so that only the corresponding user can see his own route
router.get('/get', verifySessionToken, getUser)
router.delete('/delete', verifySessionToken, deleteUser)
router.put('/update/:userName',verifySessionToken, updateUser)
router.get('/count', countUsers)
router.get('/sort', sortUsers)
router.get('/sort-limit', limitUsers)

export default router