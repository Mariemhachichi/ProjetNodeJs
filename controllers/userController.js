const user = require('../Models/user')
const jwt = require('jsonwebtoken')

exports.register = async (req,res)=> {
    const {name,email,age,password}= req.body 
    const user = user.findone({email})
    if(user){
        return res.status(400).json('email exist')
    }
    const newUser = new User(name,email,age,password)
    await newUser.save()
    res.status(201).json({message:'user created'})
}

exports.login = async (req,res)=>{
    const {email,password}= req.body 
    const user = user.findone({email})
    if(user){
        return res.status(400).json('email exist')
    }
    const isMatch = await user.comparePassword(password)
        if(!isMatch){
            res.status(400).json({message:'invalid password'})
        }
     const jwt = jwt.sign({userId:user.id},process.env.JWT_SECRET,{expiresIn:'Id'})  
        res.Send({message:'user login succ',token})
    }