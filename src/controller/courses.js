
import { CoursesTable } from "../modal/index.js";

export const getAllCourses = async (req, res) => {

    await CoursesTable.findAll()
        .then((data) => res.status(200).json({ response: data }))
        .catch((err) => res.status(401).json({ "response": "getting error", err: err }));
}

export const getCourseById = async (req, res) => {

    await CoursesTable.findByPk(req.body.CoursesId)
        .then((data => res.status(200).json({ response: data })))
        .catch((err) => res.status(401).json({ response: "getting error", err: err }))

}
export const saveCourse = async (req, res) => {

    const { courseName } = req.body;

    const [data, condition] = await CoursesTable.findOrCreate({ where: { courseName }, defaults: req.body })

    if (!condition) {

        await res.status(200).json({ response: data });

    } else {

        await res.status(200).json({ response: 'successfully created', data });
    }

}

export const editCourseById = async (req, res) => {

    await CoursesTable.update(
        req.body, {
        where: {
            CoursesId: req.body.CoursesId
        }
    }
    ).then((data) => res.status(200).json({ response: "successfully updated", data }))
        .catch((error) => res.status(401).json({ response: "getting error", error }))
}

export const deleteByCourseID = (req, res) => {

    CoursesTable.destroy({ where: { CoursesId: req.body.CoursesId } })
        .then((data) => res.status(200).json({ response: `successfully deleted ${data}` }))
        .catch((err) => res.status(401).json({ response: `getting error ${err}` }));
}
