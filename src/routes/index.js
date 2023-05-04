import express from 'express'
import userRouter from './users.js';
import courseRouter from './courses.js';
import userCourse from './userCourse.js';

const router = express.Router();

router.use(userRouter);
router.use(courseRouter);
router.use(userCourse);

export default router;