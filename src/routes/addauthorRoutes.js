const express = require('express');
const addauthorRouter = express.Router();
function router(nav){
    
    addauthorRouter.get('/',function(req,res){
        res.render("addauthors",
        {
            nav,
            title:'Library',
        });
    });
    
    return addauthorRouter;
}

module.exports=router;