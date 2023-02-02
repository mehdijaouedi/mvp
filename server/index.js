const express = require("express");
const {getAll, save, remove, update}= require ("../server/database-mongo/index");
const {getUser,saveUser}=require("../server/database-mongo/user")
// const {getUser,saveUser}=require ("../server/database-mongo/user")
const app=express()
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(__dirname + "/../client/dist"));
//all about blogs
app.get("/get",function (req,res){
    getAll((err,items)=>{
        if (err) {
            res.status(500).send(err);
        }else{
            res.status(200).json(items);
        }
    })
});
app.post("/post",(req,res)=>{
    const { title ,details, comments} = req.body
    save(req.body).then((result)=>res.status(200).send(result))
    .catch(
        (error)=> {
            res.status(404).send({
                error:error
            })
        }
    )
})
app.delete("/delete/:id", (req,res)=>{
    const id = req.params.id
    remove(id).then( 
        () => {
        res.status(200).send({
            message : 'Deleted'
        });
    }).catch((error)=> {
        res.status(400).json({
            error:error
        })
    })
} )

app.put("/update/:id",async(req,res)=>{
  const {title,details} = req.body
update(req.body).then((result)=>res.status(200).send(result))
 
  .catch(
    (error) => {
      res.status(404).send({
        error: error
      });
    }
  );
});
//all about comments 
app.post("/post/comments/:id",(req,res)=>{
    const {comments}= req.body
    console.log("hey",req.body)
    save(req.body).then((result)=>res.status(200).send(result))
    .catch(
        (error)=> {
            res.status(404).send({
                error:error
            })
        }
    )
})
app.put("/update/comments/:id",(req,res)=>{
    const {comments}= req.body
    update(req.body).then((result)=>res.status(200).send(result)
    ).catch((error)=>{
        res.status(404).send({
            error:error 
        })
    })
})
app.delete("/delete/comments/:id", (req,res)=>{
    const id = req.params.id
    remove(id).then( 
        () => {
        res.status(200).send({
            message : 'Deleted'
        });
    }).catch((error)=> {
        res.status(400).json({
            error:error
        })
    })
} )
// all about logIn
app.get("/get/login",function (req,res){
    getAll((err,items)=>{
        if (err) {
            res.status(500).send(err);
        }else{
            res.status(200).json(items);
        }
    })
});
app.post("/post/login",(req,res)=>{
    const {email,password,message} = req.body
    save(req.body).then((result)=>res.status(200).send(result))
    .catch(
        (error)=> {
            res.status(404).send({
                error:error
            })
        }
    )
})

app.listen(PORT, function () {
    console.log("listening on port 3000!");
  });
  