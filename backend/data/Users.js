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
        email:'third@email.com',
        password:bcrypt.hashSync('91235',10),
        isAdmin:false,

    },
]

export default users