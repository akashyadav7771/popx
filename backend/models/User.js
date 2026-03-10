import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

 name:String,
 phone:String,
 email:String,
 password:String,
 company:String,
 agency:String

})

export default mongoose.model("User",userSchema)