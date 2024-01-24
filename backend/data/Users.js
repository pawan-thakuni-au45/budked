import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin user',
        email:'admin@email.com',
        password:bcrypt.hashSync('1235',10),
        isAdmin:true,

    },
    {
        name:'second user',
        email:'second@email.com',
        password:bcrypt.hashSync('12305',10),
        isAdmin:false,

    },
    {
        name:'third user',
        email:'third@gmail.com',
        password:bcrypt.hashSync('91235',10),
        isAdmin:false,

    },
    {
        name:'fourth user',
        email:'fourth@email.com',
        password:bcrypt.hashSync('1234',10),
        isAdmin:false,

    },
]

export default users