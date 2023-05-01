import express from 'express';
import { editUser, getAllUsers, getUserById, saveUser } from '../controller/user.js';

const userRouter = express.Router()

userRouter.get('/getUserById', getUserById)
userRouter.get('/getAllUsers', getAllUsers)
userRouter.post("/saveUser", saveUser)
userRouter.post('/editUser', editUser)

export default userRouter;