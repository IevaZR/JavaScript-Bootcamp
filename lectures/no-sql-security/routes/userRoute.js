import { countUsers, createUser, deleteUser, getAllUsers, getUser, limitUsers, sortUsers, updateUser } from "../controllers/userController.js"; //don't forget to ad .js ad the end
import express from "express";

const router = express.Router()

router.post('/create', createUser)
router.get('/get-all', getAllUsers)
router.get('/get', getUser)
router.delete('/delete', deleteUser)
router.put('/update/:userName', updateUser)
router.get('/count', countUsers)
router.get('/sort', sortUsers)
router.get('/sort-limit', limitUsers)

export default router