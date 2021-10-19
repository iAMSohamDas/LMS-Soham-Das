const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");
const cookieparser=require("cookie-parser");


require('../db/conn');
const User = require("../model/userSchema");


router.get('/', (req, res) => {
    res.send(`HELLO WORLD FROM SERVER ROUTER JS`);
});

//using promises

/*router.post('/register', (req, res) => {

    const{name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword ){
        return res.status(422).json({ error: "pls fill the required info"});
    }

    User.findOne({email : email})
    .then((userExist) => {
        if (userExist) {
            return res.status(422).json({ error: "email already exists"});
        }

        const user = new User({name, email, phone, work, password, cpassword});

        user.save().then(()=>{
            res.status(201).json({message: "user registered successfully"});
        }).catch((err) => res.status(500).json({error : "failed to register"}));
    }).catch(err => {console.log(err); });
});*/

router.post('/register', async (req, res) => {

    const{name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword ){
        return res.status(422).json({ error: "pls fill the required info"});
    }

    try {
    const userExist = await User.findOne({email : email});
    if (userExist) {
        return res.status(422).json({ error: "email already exists"});
    }else if (password != cpassword){
        return res.status(422).json({ error: "email already exists"});
    }else{
        const user = new User ({name, email, phone, work, password, cpassword});
    }

    const user = new User({name, email, phone, work, password, cpassword});
    
    await user.save();

    res.status(201).json({message: "user registered successfully"});

    }catch (err) {
        console.log(err);
    }

});

//login route

router.post('/signin', async (req, res) => {
    try{
        const {email, password} = req.body;  

        if(!email || !password){
            return res.status(400).json({error:"please fill the data"})
        }

        const userLogin = await User.findOne({email:email});

        //console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });


        if (!isMatch) {
            res.status(400).json({error : "Invalid Credentials"});
        } else {
            res.json({message:"user Signed in successfully"});
        }
        }else{
            res.status(400).json({error : "Invalid Credentials"});
        } 

    }catch(err) {
        console.log(err);
    }
});

//about us page

router.get('/about', authenticate ,(req, res) => {
    console.log(`hello my about`);
    res.send(req.rootUser);
});

//data for contact us
router.get('/getdata', authenticate ,(req, res) => {
    console.log(`hello my about`);
    res.send(req.rootUser);
});

//contact us page
router.post('/contact', authenticate, async (req, res) => {
    try{
        const {name, mail, phone, message} = req.body;
        if(!name || !mail || !phone || !message){
            console.log("error in contact form");
            return res.json({error:"please fill the contact form"});
        }

        const userContact = await User.findOne({_id:req.userID});

        if (userContact) {
            const userMessage = await userContact.addMessage(name, mail, phone, message);

            await userContact.save();

            res.status(201).json({message:"user cantacted successfully"})
        }

    }catch(error){
        console.log(error);
    }

    //logout page
    //about us page

router.get('/logout',(req, res) => {
    console.log(`hello my Logout`);
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('user logged out');
});

app.use(cookieparser());


});
module.exports = router;