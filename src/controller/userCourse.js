import { userCoursesTable } from "../modal/index.js";

export const enrollCourse = async (req, res) => {
    console.clear()
    await userCoursesTable.findOrCreate({
        where: {
            userId: req.body.userId,
            CoursesId: req.body.CoursesId
        }, defaults: {
            userId: req.body.userId,
            CoursesId: req.body.CoursesId
        }
    })
        .then(data => data[1] ? res.status(200).json({ response: "successfully created", data }) : res.status(200).json({ response: "already created", data }))
        .catch(error => res.status(401).json({ response: "getting error", error }))
}