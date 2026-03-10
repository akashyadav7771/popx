import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

 function Profile(){

 const navigate = useNavigate()

 const [user,setUser] = useState({})



  useEffect(()=>{

 const token = localStorage.getItem("token")

 if(!token){
  navigate("/login")
  return
 }

 axios.get("http://localhost:5000/api/profile",{
  headers:{
   Authorization: token
  }
 })
 .then(res=>{
  setUser(res.data)
 })
 .catch(()=>{
  navigate("/login")
 })

},[])

 const logout = ()=>{
  localStorage.removeItem("token")
  navigate("/login")
 }

 return(

<div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">

 <div className="bg-white w-[350px] rounded shadow p-5">

  <h2 className="text-lg font-bold mb-5">
   Account Settings
  </h2>

  <div className="flex items-center gap-3 mb-4">

   <img
   src="https://i.pravatar.cc/100"
   className="w-14 h-14 rounded-full"
   />

   <div>
    <h3 className="font-semibold">{user.name}</h3>
    <p className="text-gray-500 text-sm">{user.email}</p>
   </div>

  </div>

  <p className="text-sm text-gray-600 mb-5">
   Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
   Elitr, Sed Diam Nonumy Eirmod Tempor.
  </p>

  <button
  onClick={logout}
  className="w-full bg-purple-600 text-white p-2 rounded"
  >
   Logout
  </button>

 </div>

</div>

 )

}
export default Profile;