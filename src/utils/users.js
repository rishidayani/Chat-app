const users = []

// addUser, removeUser, getUser, getUserInRoom

const addUser = ({ id, username, room }) => {
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if(!username || !room) {
        return {
            error: `Username and room are required`
        }
    }

    // Check for existig user
    const existigUser = users.find(user => {
        return user.room === room && user.username === username
    })

    // Validate username
    if (existigUser) {
        return {
            error: `Username is in use!`
        }
    }

    //store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1) {
        return users.splice(index,1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUserInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}