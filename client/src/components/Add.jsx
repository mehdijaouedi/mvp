// import React, { useEffect, useState } from 'react'
// import ReactDOM from "react-dom"
// import axios from 'axios'
// import List from './List'
// import ListItem from './ListItem'

// const Add= () => {

//   const [items, setItems] = useState([])
//   const [title , setTitle]= useState("")
//   const [details,setDetails]=useState("")
//   const [comments,setComments]=useState("")
  
// const fetchData =() => {
//   axios 
//   .get("http://localhost:3000/get")
//   .then((res)=> setItems(res.data))
//   .catch((error)=> console.log(error))
// }
//   useEffect(() => {
//     fetchData()
//   }, [])
//  const postClick = ( e)=>{
//   e.preventDefault()
//   let data = {title,details}
//   fetch("http://localhost:3000/post",{
//     method:"POST",
//     headers:{
//       Accept : "application/json",
//       "content-Type":"application/json"
//     },
//     body :JSON.stringify(data)
//   }).then((res)=>{
//     console.log(res)
//     window.location.reload()
//   })
//  }
 
//   return (

 

//     <div>
    
//       <h1 className='logo'>E-learning</h1>
//       {/* <Link to={`/ContactForm`}>contact</Link> */}
//       <button type='button' onClick={postClick}>more about us</button>
//       <button type='button' onClick={postClick}> teachers</button>
//       <h1 className='textt'>train your brain</h1>
   

//       <input 
      
//       type="text" 
//       placeholder='add title'
//       value={title}
//       onChange={(e)=> setTitle(e.target.value)}/>
//       <input 
//       type="text" 
//       placeholder='add details'
//       value={details}
//       onChange={(e)=> setDetails(e.target.value)}/>

//       <button type='button' onClick={postClick}>post</button>
//  <List items={items}/>
      
//     </div>
//   )
// }
// export default Add;