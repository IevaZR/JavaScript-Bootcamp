import express from 'express';
import {createUser, getAllUsers, getUser, deleteUser, updateUser} from '../controllers/userController.js';

const router = express.Router()

router.post('/create', createUser)
router.get('/get-all', getAllUsers)
router.get('/get/:userName', getUser)
router.delete('/delete/:userName', deleteUser)
router.put('/update/:userName', updateUser)

export default router