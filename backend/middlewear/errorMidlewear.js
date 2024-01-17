 

 const notfound=(err,req,res,next)=>{

    const error=new Error(`Not Found- ${req.originalUrl}`)
    res.status(404)
    next(error)
 }

 const errorHandler=(err,req,res,next)=>{

    let statusCode=req.statusCode===200 ? 500 :res.statusCode
    let message=err.message

    //check for mongoose bad object

    if(err.name==='CastError' && err.kind==='objectId'){
      message='Resource not found'
      statusCode=404
    }

    res.status(statusCode).json({
      message,
      stack:process.env.NODE_ENV==='production'?'hhh':err.stack,
    })
 }

 export {notfound,errorHandler}