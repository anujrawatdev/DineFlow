const checkForOwner = (req,res,next)=>{

    if(req.user.role !== "owner"){
        return res.status(403).json({
            message:"Only owners can access this"
        });
    }

    next();
}

module.exports = {checkForOwner};