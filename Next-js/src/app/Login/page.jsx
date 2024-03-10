"use client";

const LoginPage = () => {

   const getUsersData = async () => {
      const response = await fetch('http://localhost:3000/api/users')
      const data = await response.json()
      console.log(data)
   }

   return (
      <div>
         <h1>Login page</h1>

         <button onClick={getUsersData}>Get Users Data</button>
      </div>
   )
}

export default LoginPage