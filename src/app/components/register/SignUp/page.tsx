'use client'
import Navbar from '@/app/nav-bar/page'
import '@/app/styles/loginPage.css'
import Link from 'next/link'
import { useState } from 'react'
export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    console.log('firstname:', firstName)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
    if(!firstName || !lastName || !email || !password) {
        setError("All Fields are necessary!");
        return;
    }

    try {
     const res = await fetch('api/register', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          firstName,
           lastName,
            email,
            password

        })

      });
      if(res.ok) {
        console.log("User registered successfully")
      } else {
        const errorMessage = await res.json();
        console.log("Regestration Failed", errorMessage)
      }
      
    } catch (error) {
      
    };
  }
  
    return (
        <>
         <body className='body'>
          <Navbar/>

          <h1 className="header">
            Finance and Consulting ClubIIT Hyderabad
          </h1>
          <form onChange={handleSubmit} action="" className="form">
            <label htmlFor="" className="label">Name</label>
            <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" className="inputBox" />
            <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" className="inputBox" /><br /><br />
            <label htmlFor="">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="mailBox inputBox" /><br /><br />
            <label htmlFor="" className="lPassword">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="mailBox inputBox passBox" />
     {error && (
        <h1>{error}</h1>
     )}
      <button type='submit' className="sub-btn" >Subscribe!</button>
          </form>
         
        <p className="login-txt">Already a member? <Link href="./"  className='underline'>Login</Link></p>
         </body>
        </>
    )
}