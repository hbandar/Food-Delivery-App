const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.post(
  '/createuser',
  [
    // Add validation middleware here
    body('name').notEmpty().withMessage('Name is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('location').notEmpty().withMessage('Location is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      console.log('success');
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Server error' });
    }
  }
);


router.post(
    '/login', 
    [
        // Add validation middleware here
        body('password').notEmpty().withMessage('Password is required'),
        body('email').isEmail().withMessage('Invalid email'),
      ], 
    async (req, res) => {
        console.log(req.body.email,req.body.password);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

      try {
        let userdata = await User.findOne({email:req.body.email});
        if(!userdata){
            return res.status(400).json({errors:"Invalid email"});
        }
        if(req.body.password !== userdata.password){
            return res.json({errors: "invalid password"});
        }
        return res.json({success:true});
      } catch (error) {
        console.log(error);
        res.json({ success: false });
      }
    }
  );

module.exports = router;
