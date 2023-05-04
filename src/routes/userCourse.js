import express from "express";
import { enrollCourse } from "../controller/userCourse.js";

const userCourse = express.Router()

userCourse.post('/enrollCourse', enrollCourse);

export default userCourse;

