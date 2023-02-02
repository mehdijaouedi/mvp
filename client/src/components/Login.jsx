import React, {  useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const LoginForm=(props)=> {
 
    const [form, setForm] = useState({})
    // const   [isConnected ,setIsConnected]=useState(false)
    const [errors, setErrors] = useState(false);
    const logg = ( e)=>{
        e.preventDefault()
        let data = {email,password}
        fetch("http://localhost:3000/post/login",{
          method:"POST",
          headers:{
            Accept : "application/json",
            "content-Type":"application/json"
          },
          body :JSON.stringify(data)
        }).then((res)=>{
          console.log(res)
          window.location.reload()
        })
       }
  
    const handleChange = (event)=>{
        setForm(event.target.value);
           
    }
  
    
  return (
    <div className='login'>
   
      <div >
        <h3 className="login">logIn</h3>
        <div >
          <label>Email address</label>
          <input
          required
            type="email"
            className="email"
            placeholder=" your email please"
            name='Email'
            value={form.Email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
          required
            type="password"
            className="password"
            placeholder="your password please"
            name='Password'
            value={form.Password}
            onChange={handleChange}
          />
        </div>
        <div >
          <button type="submit" className="submit" onClick={()=>{logg}} >
           logIn
          </button>
        </div>
       
      </div>
    
  </div>
  )
  }
export default LoginForm;