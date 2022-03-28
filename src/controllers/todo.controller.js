const express= require("express");


const router=express.Router();
const Todo=require("../models/todo.model");
const authenticate=require("../middleware/authenticate")
router.post("",authenticate,async(req,res)=>{
    req.body.user_id = req.user._id
    try{
        const todo =await Todo.create(req.body)
        return res.status(200).send(todo)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const todo =await Todo.find()
        return res.status(200).send(todo)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const todo =await Todo.findByIdAndUpdate(req.params.id)
        return res.status(200).send(todo)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const todo =await Todo.findByIdAndDelete(req.params.id)
        return res.status(200).send(todo)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

module.exports=router