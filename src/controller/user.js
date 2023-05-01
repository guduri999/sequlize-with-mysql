import { UsersTable } from "../modal/index.js"

export const getAllUsers = (req, res) => {
    // const val = UsersTable.create({
    //     userName: 'he;;p',
    //     Password: 'asdf',
    //     Email: 'asfd',
    //     FirstName: 'asdf',
    //     LastName: 'asfd',
    //     Gender: 'asf',
    //     DateOFBorth: 'asf',
    //     Address: 'asf',
    //     PhoneNumber: 'asfd',
    // })
    res.status(200).json({ hello: "" })
}
export const getUserById = (req, res) => {
    res.status(200).json({ hello: "getUserById" })
}

export const deleteUser = (req, res) => {
    res.status(200).json({ hello: 'deleteUser' })
}
export const editUser = (req, res) => {
    res.status(200).json({ hello: 'editUser' })
}
export const saveUser = (req, res) => {
    res.status(200).json({ hello: "saveUser" })
}