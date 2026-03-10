import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = async(e)=>{
 e.preventDefault()

 try{

 const res = await axios.post(
 "http://localhost:5000/api/login",
 {email,password}
 )

 localStorage.setItem("token",res.data.token)

 navigate("/profile")

 }catch{

 alert("Login Failed")

 }

}

return(

<div className="min-h-screen bg-gray-100 flex justify-center items-center">

<form
onSubmit={handleSubmit}
className="bg-white w-[360px] p-6 rounded shadow"
>

<h2 className="text-xl font-bold mb-2">
Signin to your PopX account
</h2>

<p className="text-gray-500 text-sm mb-6">
Lorem ipsum dolor sit amet
</p>

{/* Email */}
<div className="relative mb-5">
<input
type="email"
placeholder=" "
className="peer w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<label className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600">
Email Address
</label>
</div>

{/* Password */}
<div className="relative mb-6">
<input
type="password"
placeholder=" "
className="peer w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<label className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600">
Password
</label>
</div>

<button
className="bg-purple-600 w-full text-white p-2 rounded"
>
Login
</button>

</form>

</div>

)

}

export default Login