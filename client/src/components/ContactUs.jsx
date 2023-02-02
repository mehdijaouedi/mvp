import React,{useState} from 'react'
const ContactForm = () => {
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [message,setMessage]=useState("")
  const send = ( e)=>{
    e.preventDefault()
    let data = {email,password,message}
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

  return (
    <div className="container">
      <h2 className="text">contact us for more information</h2>
        <div >
            Name
          <input  type="text"  placeholder= "your name please "id="name" required  value={name}
      onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div > 
            Email  
          <input  type="email" placeholder="your email please" id="email" required  value={email}
      onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
            Message
          <textarea   placeholder= "tell us "id="message" required  value={message}
      onChange={(e)=> setMessage(e.target.value)}/>
        </div>
        <button type="submit" className="submit" onClick={()=>{send}} >
           send
          </button>
    </div>
  )
}
export default ContactForm;