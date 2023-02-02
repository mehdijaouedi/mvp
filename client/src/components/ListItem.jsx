import React ,{useState,useEffect} from 'react';
import axios from "axios";
const ListItem = (props) => {
  const[show,setShow] =useState(false);
  const [items, setItem] = useState([])
  const [title,setTitle]=useState(props.item.title);
  const [details,setDetails] = useState(props.item.details)
  const [comments,setComments] = useState("")
  const [sho,setSho]= useState(false)
     const fetchData =() => {
      axios 
      .get("http://localhost:3000/get")
      .then((res)=> setItem(res.data))
      .catch((error)=> console.log(error))
    }
      useEffect(() => {
        fetchData()
      }, [])
  const updateClick = (ID) => {
    setShow(false)
    let data ={title,details} ;
    fetch(`http://localhost:3000/update/${ID}`,{
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      window.location.reload()
    });
  };
  const deleteClick = (ID) => {
    fetch (`http://localhost:3000/delete/${ID}`,{
      method:'DELETE',
      headers:{
        Accept:"application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify(),
    }).then((res)=>{
      console.log(res);
      window.location.reload()
  })
}
//comments 
const postCommentsClick = ( id)=>{
  let data = {comments}
  fetch(`http://localhost:3000/post/comments/${id}`,{
    method:"POST",
    headers:{
      Accept : "application/json",
      "content-Type":"application/json"
    },

    body :JSON.stringify(data)
  }).then((res)=>{
    console.log(res)
    
    console.log(data)

  })
 }
 const updateCommentsClick = (id)=>{
  let data = {comments}
  fetch(`http://localhost:3000/update/comments/${id}`,{
    method:"PUT",
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
 const deleteCommentsClick = (id)=>{
  let data = {comments}
  fetch(`http://localhost:3000/delete/comments/${id}`,{
    method:"DELETE",
    headers:{
      Accept : "application/json",
      "content-Type":"application/json"
    },
    body :JSON.stringify()
  }).then((res)=>{
    console.log(res)
  
  })
 }
// const postCommentClick = ()=>{
//   // e.preventDefault()
  
//   fetch(`http://localhost:3000/post`,{
//     method:"POST",
//     headers:{
//       Accept : "application/json",
//       "content-Type":"application/json"
//     },
//     body :JSON.stringify(comments)
//   }).then((res)=>{
//     console.log(res)
//     // fetchData()
//   })
//  }
return(
  <div className="container">
      {!show ? (
        <div>
          <br />
          <br />
          <div className="title">
         {props.item.title}</div>
          <br />
         <div className="details"> 
          {props.item.details}
       </div>
        </div>
      ) : (
        <div>
         <input type="text" 
         value={title} 
         onChange={(e)=>setTitle(e.target.value)}/><br />
          <br />
        <input type="text" 
        value={details} 
        onChange={(e)=>setDetails(e.target.value)}/><br />
       
        </div>
      )}
      {/* let's start with comments */}
     
     
 <button onClick={() => setSho(!sho)}>comments</button>
 <button onClick={()=>deleteClick(props.item._id)}>Delete</button>
      {!show ? 
        (<button onClick={() => setShow(true)}>Edit</button>) :
        (<button type='button' onClick={() =>updateClick(props.item._id)}>Update</button>)
      
      }
      {sho && <>
        <div>
      comments:{props.item.comments} </div>
      <input 
      type="text" 
      placeholder='add comment'
      value={comments}
      onChange={(e)=> setComments(e.target.value)}/>
      <button onClick={() =>updateCommentsClick(props.item._id)}>post</button>
      <button onClick={() =>deleteCommentsClick(props.item._id)}>delete</button>
      </>
      }     
       <div>
    </div>
    </div>
  );

}

export default ListItem;