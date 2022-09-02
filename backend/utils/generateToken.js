const jwt =require('jsonwebtoken')


//generate token
const generateAccessToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'15m',

    })
}
//generate refresh token
const generateRefreshToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET2)
}
 module.exports={generateAccessToken,generateRefreshToken}