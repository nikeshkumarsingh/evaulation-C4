const express=require("express");
const usercontroller=require("./controllers/user.controller")
const todocontroller=require("./controllers/todo.controller")
const {register,login}=require("./controllers/auth.controller")

const app=express();
app.use(express.json());
app.use("/users",usercontroller)
app.use("/register",register)
app.use("/login",login)
app.use("/todo",todocontroller)


module.exports=app;