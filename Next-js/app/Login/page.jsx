"use client";

const LoginPage = () => {

   const getUsersData = async () => {
      try {
         const response = await fetch('http://localhost:3000/api/users', {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json'
            }
         })
         const data = await response.json()
         console.log(data)
      } catch (error) {
         console.log(error)
      }
   }

   const postUsersData = async () => {
      try {
         await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            // body: JSON.stringify({
            //    Username: 'user',
            //    Password: '12345',
            //    'Nama Panggilan': 'siapa',
            //    'No WhatsApp': '1234567890'
            // })
         
         })
         console.log('Success adding data to database')
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div>
         <h1>Login page</h1>

         <button onClick={getUsersData}>Get Users Data</button>
         <button onClick={postUsersData}>Add Users Data</button>
      </div>
   )
}

export default LoginPage