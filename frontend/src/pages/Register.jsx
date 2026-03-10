import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register(){

const navigate = useNavigate()

const [form,setForm] = useState({
 name:"",
 phone:"",
 email:"",
 password:"",
 company:"",
 agency:"Yes"
})

const handleChange = (e)=>{
 setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{
 e.preventDefault()

 await axios.post("http://localhost:5000/api/register",form)

 navigate("/login")
}

return(

<div className="min-h-screen bg-gray-100 flex justify-center items-center">

<form
onSubmit={handleSubmit}
className="bg-white w-[360px] p-6 rounded shadow"
>

<h2 className="text-xl font-bold mb-6">
Create your PopX account
</h2>

{/* Full Name */}
<div className="relative mb-5">
<input
name="name"
placeholder=" "
className="peer w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
onChange={handleChange}
/>
<label className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600">
Full Name*
</label>
</div>

{/* Phone */}
<div className="relative mb-5">
<input
name="phone"
placeholder=" "
className="peer w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
onChange={handleChange}
/>
<label className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600">
Phone number*
</label>
</div>

{/* Email */}
<div className="relative mb-5">
<input
name="email"
placeholder=" "
className="peer w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
onChange={handleChange}
/>
<label className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600">
Email address*
</label>
</div>

{/* Password */}
<div className="relative mb-5">
<input
type="password"
name="password"
placeholder=" "
className="peer w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
onChange={handleChange}
/>
<label className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600">
Password*
</label>
</div>

{/* Company */}
<div className="relative mb-5">
<input
name="company"
placeholder=" "
className="peer w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
onChange={handleChange}
/>
<label className="absolute left-3 -top-2 bg-white px-1 text-sm text-purple-600">
Company name
</label>
</div>

<p className="text-sm font-semibold mb-2">
Are you an Agency?*
</p>

<div className="flex gap-6 mb-6">

<label className="flex items-center gap-2">
<input
type="radio"
name="agency"
value="Yes"
defaultChecked
onChange={handleChange}
/>
Yes
</label>

<label className="flex items-center gap-2">
<input
type="radio"
name="agency"
value="No"
onChange={handleChange}
/>
No
</label>

</div>

<button
className="bg-purple-600 w-full text-white p-2 rounded"
>
Create Account
</button>

</form>

</div>

)

}

export default Register