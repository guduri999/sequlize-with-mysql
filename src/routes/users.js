import express from 'express';
import { editUser, getAllUsers, getUserById, saveUser, deleteUser, userLogin } from '../controller/user.js';

const userRouter = express.Router()

userRouter.get('/getAllUsers', getAllUsers) //done
userRouter.post('/getUserById', getUserById) //done
userRouter.post("/saveUser", saveUser) //done
userRouter.post("/deleteUser", deleteUser) //done
userRouter.post('/editUser', editUser) //done
userRouter.post('/userLogin', userLogin) //under process

export default userRouter;