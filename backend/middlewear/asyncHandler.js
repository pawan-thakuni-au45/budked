
//it is just a function that takes req,res and next and its gonna resolve the promise and once it resolve the orimse and call next which is next piece of mdlwer
const asyncHandler=fn=>(req,res,next)=>{

    Promise.resolve(fn(req,res,next)).catch(next)
}

export default asyncHandler