import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => {
  return (
    <> 
    {props.items.map((item)=> 
    <div key ={item._id} > <ListItem item={item}/></div>  ) }</>
  )
}

export default List;
