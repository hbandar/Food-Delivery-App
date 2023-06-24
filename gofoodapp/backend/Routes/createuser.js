const express = require('express');
const router = express.Router();
const User = require('../models/user')
const { body, matchedData, validationResult } = require('express-validator');

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

router.post('/createuser',[
body('email').isEmail(),
body('name').isLength({min:6}),
body('password').isLength({ min: 5 })]
,async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    try{
        await User.create({
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