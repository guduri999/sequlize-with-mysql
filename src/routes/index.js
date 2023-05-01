import express from 'express'
import userRouter from './users.js';
import courseRouter from './courses.js';

const router = express.Router();

router.use(userRouter);
router.use(courseRouter);

export default router;