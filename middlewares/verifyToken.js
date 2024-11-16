const jwt=require('jsonwebtoken')

//token verification middleware
const verifyToken=async(req,res,next)=>{
    //get Bearer token from header of req obj
    const bearerToken=req.headers.authorization;
    //if bearer token not found
    if(!bearerToken){
        res.send({message:"Unauthorized req"})
    }
    //if bearer token is present
    else{
        const token=bearerToken.split(' ')[1];
        try{
        //verify token
        const decodedToken=jwt.verify(token,'abcdef')
        //forward req to next
        next()
        }
        catch(err){
            res.send({message:"Token expired..plz relogin"})
        }
    }
}

//export
module.exports=verifyToken;
