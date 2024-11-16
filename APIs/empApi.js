const exp=require('express')
const empApp=exp.Router()
const expressAsyncHandler=require('express-async-handler')
const EmpModel=require('../models/EmpModel')
empApp.use(exp.json())


//create new emp
empApp.post('/emp',expressAsyncHandler(async(req,res)=>{
    //get emp from req
    const newEmp=req.body;

    console.log(newEmp)

    //create new emp doc
    let empDoc=new EmpModel(newEmp)
    //save
    await empDoc.save()
    //send res
    res.send({message:"new emp created"})

}))

module.exports=empApp;