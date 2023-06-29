import { countUsers, createUser, deleteUser, getAllUsers, getUser, limitUsers, loginUser, sortUsers, updateUser } from "../controllers/userController.js"; //don't forget to ad .js ad the end
import express from "express";
import { verifySessionToken } from "../middleweares/authenticationCheck.js";

const router = express.Router()


//we need to add a midelwear who can configure our routes, so that noone else cannot send these requests, if they know the routes (for example http://localhost:3005/get-all )
//we created a new folder named middleweares and a new file within it
router.post('/create', createUser)
router.post('/login', loginUser)
router.get('/get-all', verifySessionToken, getAllUsers)

//here we add the token created in authenticationCheck, so that only the corresponding user can see his own route
router.get('/get', verifySessionToken, getUser)
router.delete('/delete', deleteUser)
router.put('/update/:userName', updateUser)
router.get('/count', countUsers)
router.get('/sort', sortUsers)
router.get('/sort-limit', limitUsers)

export default router