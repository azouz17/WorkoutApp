import { Link } from "react-router-dom"
import React , {useState} from 'react'

const Signin = () =>{
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const handleUsernameChange = (event) =>{
    setUsername(event.target.value)
}
const handlePasswordChange = (event) =>{
    setPassword(event.target.value)
}

const printVars = ()=>{
    console.log(username)
    console.log(password)
}

return(
<div className="flex h-screen justify-center">
    <div className="flex w-3/4 justify-center h-3/4">
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-6xl text-[#00B295]">Fit Flex</h1>
            <p className="mt-12 font-semibold text-2xl ">Sign In</p>
            <div className="mt-6 flex flex-col font-semibold">
                <label className="mt-2">Username:</label>
                <input onChange={handleUsernameChange} type="text" name="username" className="text-black p-1 rounded-lg border border-gray mt-2"/>
                <label className="mt-2">Password:</label>
                <input onChange={handlePasswordChange} type="password" name="password" className="text-black p-1 rounded-lg border border-gray mt-2"/>
            </div>
            <button onClick={printVars} className="p-2 bg-black border border-solid border-[#00B295] text-[#00B295] mt-6 font-semibold rounded-lg">Sign In</button>
            <p className="mt-4">Dont have an Account? Sign Up <Link to="/Signup" className="text-blue-400">Here</Link> </p>
        </div>
    </div>
</div>

)
}
export default Signin