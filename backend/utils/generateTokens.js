import jwt from 'jsonwebtoken'

const generateToken=(res,userId)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
    //set jwt as http only cookie
    res.cookie('jwt',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV!='development' ,
        sameSite:'strict',
        maxAge:30*24*60*60*1000  //30 days
    })
    res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin
    })
}

export default generateToken