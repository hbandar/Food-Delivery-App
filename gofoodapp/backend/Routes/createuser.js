const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

router.post('/createuser', (req,res)=>{
    try{
            User.create({
            name:req.body.name,
            password:req.body.password,
            email: req.body.email,
            location: req.body.location
        }).then(()=>{console.log("success")});
        res.json({success:true});
    }
    catch(error){
        console.log(error);
        res.json({success:false});
    }
});

module.exports = router;