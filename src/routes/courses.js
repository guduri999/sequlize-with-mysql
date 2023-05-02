import express from 'express'
import { deleteByCourseID, editCourseById, getAllCourses, getCourseById, saveCourse } from '../controller/courses.js'

const courseRouter = express.Router()

courseRouter.get("/getAllCourses", getAllCourses)
courseRouter.post('/getCourseById', getCourseById)
courseRouter.post("/saveCourse", saveCourse)
courseRouter.post("/editCourseById", editCourseById)
courseRouter.post('/deleteByCourseID', deleteByCourseID)

export default courseRouter;
