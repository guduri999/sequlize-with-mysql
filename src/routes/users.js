import express from 'express';
import { editUser, getAllUsers, getUserById, saveUser, deleteUser } from '../controller/user.js';

const userRouter = express.Router()

userRouter.get('/getAllUsers', getAllUsers) //done
userRouter.post('/getUserById', getUserById) //done
userRouter.post("/saveUser", saveUser) //done
userRouter.post("/deleteUser", deleteUser) //under construction
userRouter.post('/editUser', editUser) //under construction

export default userRouter;