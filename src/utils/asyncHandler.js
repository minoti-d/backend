//2 methods

//1. try and catch method
// const asyncHandler = (fn) => {async (req, res, next) => {
//     try{
//         await fn(req, res, next)
//     }
//     catch(error){
//         req.status(err.code || 500).json({
//             success: false,
//             message: err.meassage
//         })
//     }
// }
// }

const asyncHandler = (fn) => {
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
        .catch((err) => next(err))
    }
}



export {asyncHandler}