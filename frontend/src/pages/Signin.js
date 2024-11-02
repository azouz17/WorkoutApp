import { Link } from "react-router-dom"
import React , {useState} from 'react'

const Signin = () =>{
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [InvaledCredentials, setInvaledCredentials] = useState(false)

const handleUsernameChange = (event) =>{
    setUsername(event.target.value)
}
const handlePasswordChange = (event) =>{
    setPassword(event.target.value)
}


function setCookie(name, value, seconds) {
    const expires = new Date(Date.now() + seconds * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }
  
  async function loginUser(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5178/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            Email: username,
            Password: password,
        })
        ,
      });
  
      if (!response.ok) {
        console.log('invalid credentials')
        setInvaledCredentials(true)
        throw new Error ('Login Failed')
      }

  else{
     const data = await response.json();
  
      // Set cookies for accessToken and refreshToken
      setCookie("accessToken", data.accessToken, 3600); // Expires in 1 day
      setCookie("refreshToken", data.refreshToken, 7); // Expires in 7 days
  
      console.log("Login successful:", data);
      setInvaledCredentials(false)
  }
      
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

return(
<div className="flex h-screen justify-center">
    <div className="flex w-3/4 justify-center h-3/4">
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-6xl text-[#00B295]">Fit Flex</h1>
            <p className="mt-12 font-semibold text-2xl ">Sign In</p>
        <form  onSubmit={loginUser}>
            <div className="mt-6 flex flex-col font-semibold">
            {InvaledCredentials == true && <p className="text-red-500 font-semibold text-center">Invalid credentials</p>}
                <label className="mt-2">Username:</label>
                <input required onChange={handleUsernameChange} type="email" name="username" className="text-black p-1 rounded-lg border border-gray mt-2"/>
                <label className="mt-2">Password:</label>
                <input required onChange={handlePasswordChange} type="password" name="password" className="text-black p-1 rounded-lg border border-gray mt-2"/>
            </div>
            <button type="submit" className="p-2 bg-black border border-solid border-[#00B295] text-[#00B295] mt-6 font-semibold rounded-lg mx-auto">Sign In</button>
        </form>
            <p className="mt-4">Dont have an Account? Sign Up <Link to="/Signup" className="text-blue-400">Here</Link> </p>
        </div>
    </div>
</div>

)
}
export default Signin