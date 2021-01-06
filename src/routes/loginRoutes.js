const express = require('express');
const loginRouter = express.Router();
function router(nav1){
    
    loginRouter.get('/',function(req,res){
        res.render("login",
        {
            nav1,
            title:'Library',
        });
    });
    
    return loginRouter;
}

module.exports=router;