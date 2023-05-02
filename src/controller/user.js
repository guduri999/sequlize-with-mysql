import { UsersTable } from "../modal/index.js"

export const getAllUsers = async (req, res) => {

    await UsersTable.findAll()
        .then((data) => res.status(200).json({ response: data }))
        .catch((err) => console.log(`getting error ${err}`))

}

export const getUserById = async (req, res) => {

    const { userId } = req.body

    await UsersTable.findByPk(userId)
        .then((data) => res.json({ response: data }))
        .catch((err) => { res.status(500).json({ response: `getting error ${err}` }) })

}

export const saveUser = async (req, res) => {

    const { userName, PhoneNumber, Email } = req.body

    const [data, condition] = await UsersTable.findOrCreate({ where: { userName, PhoneNumber, Email }, defaults: req.body })

    if (condition) {

        await res.status(200).json({ response: "user successfully created" })

    } else {

        await res.status(401).json({ response: data })
    }

}

export const deleteUser = async (req, res) => {

    const { userId } = req.body

    await UsersTable.destroy({ where: { userId: userId } })
        .then((data) => res.status(200).json({ response: 'successfully deleted', content: data }))
        .catch((err) => res.status(401).json({ response: `getting error while deleting ${err}` }))

}

export const editUser = (req, res) => {

    res.status(200).json({ hello: 'editUser' })
}