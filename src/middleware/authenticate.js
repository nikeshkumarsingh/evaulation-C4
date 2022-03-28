require("dotenv").config();
const jwt=require("jsonwebtoken")

const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.jwt_jet_key,(err,decoded)=>{
            return resolve(decoded)
        })
    })
}

const authenticate=async(req,res,next)=>{
    if(!req.headers.authorization)
    return res.status(400).send({message:"Authorization not found or incorrect"})

    if(!req.headers.authorization.startwith("bearer "))
    return res.status(400).send({message:"Authorization not found or incorrect"})

    const token=req.headers.authorization.trim().aplit(" ")[1]

    let decoded;
    try{
        decoded=await verifyToken(token)
    }catch(err){
         console.log(err)
         return res.status(500).send({message:err.message})
    }

    req.userid=decoded.user._id
    return next()
}
module.exports=authenticate;