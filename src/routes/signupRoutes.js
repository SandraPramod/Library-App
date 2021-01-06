const express = require('express');
const signupRouter = express.Router();
function router(nav1){
    
    signupRouter.get('/',function(req,res){
        res.render("signup",
        {
            nav1,
            title:'Library',
        });
    });
    
    return signupRouter;
}

module.exports=router;