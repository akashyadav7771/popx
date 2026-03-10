import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async(req,res)=>{

 const hashedPassword = await bcrypt.hash(req.body.password,10)

 const user = new User({
  ...req.body,
  password:hashedPassword
 })

 await user.save()

 res.json({message:"User created"})
}

export const login = async(req,res)=>{

    console.log(req.body)
 try{

 const user = await User.findOne({email:req.body.email})

 if(!user) return res.status(400).json("User not found")

 const match = await bcrypt.compare(req.body.password,user.password)

 if(!match) return res.status(400).json("Wrong password")

    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

 res.json({token})
 console.log("JWT_SECRET:", process.env.JWT_SECRET)

 }catch(err){

  console.log(err)
  res.status(500).json("Server error")

 }

}



export const getProfile = async(req,res)=>{

 try{

 const user = await User.findById(req.user.id).select("-password")

 res.json(user)

 }catch(err){

  res.status(500).json("Server error")

 }

}