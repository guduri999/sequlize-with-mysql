

export const getAllUsers = (req, res) => {
    res.status(200).json({ hello: "getAllUsersire" })
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