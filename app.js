//jshint esversion:6

const express = require('express');
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static("views"));
app.set("view engine", "ejs");







app.get("/", (req,res)=>{
    res.render("home");
})

app.get("/about", (req,res)=>{
    res.render("about");
})

app.get("/contact", (req,res)=>{
    res.render("contact");
})

app.get("/portfolio", (req,res)=>{
    res.render("myPortfolio");
})

app.get("/portfolio/1", (req,res)=>{
    res.render("portfolio1");
})

app.get("/portfolio/2", (req,res)=>{
    res.render("portfolio2");
})

app.get("/portfolio/3", (req,res)=>{
    res.render("portfolio3");
})

app.get("/blog", (req,res)=>{
    res.render("error404");
})







app.post("/contact", (req,res)=>{

    var name = req.body.dialname;
    console.log(name);
    var email = req.body.dialemail;
    console.log(email);
    var message = req.body.dialmessage;
    console.log(message);

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        post: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'dr.sangog@gmail.com',
            pass: 'Omchal@2021'
        }
    });
   
    var mailOptions = {
        from: {
            name: name,
            address: 'dr.sangog@gmail.com'
        },
        to: 'omkarcc1122@gmail.com',
        subject: name,
        html: '<h3>User Name : ' + name + '</h3>' + '<h3>Email ID : ' + email + '</h3>' + '<br><br>' + '<h2>' + message + '</h2>'
    };


    transporter.sendMail(mailOptions, (err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log('email was sent successully: ' + info.response);
        }
    });

    res.redirect('contact');
})





app.listen(process.env.PORT || 3000, ()=>{
    console.log("ServerStarted");
})