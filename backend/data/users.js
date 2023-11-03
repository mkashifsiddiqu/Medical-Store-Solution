
import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'alshifa@admin.com',
        password : bcrypt.hashSync('123456', 10),
        isAdmin : true
    },
    {
        name: 'Saleem Sadeeq',
        email: 'saleem@example.com',
        password :  bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Ali Naeem',
        email: 'ali@example.com',
        password :  bcrypt.hashSync('123456', 10)
    }
]

export default users