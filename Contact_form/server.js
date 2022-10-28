//require dotenv
require('dotenv').config()

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars')
const nodemailer = require('nodemailer')
const PORT = process.env.PORT;
const path = require('path')
//installing cors
var cors = require('cors')

const app = express();
//view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//middleware
app.use(cors({credentials:true, origin:true}));

//body parser midddleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//static -public folder
app.use('/public', express.static(path.join(__dirname, 'public')));

//routes
app.get('/',(req,res) => {
    res.render('layouts/main')
})


app.post('/send', (req,res) => {
    const output = `
    <p> You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Name: ${req.body.company}</li>
    <li>Name: ${req.body.email}</li>
    <li>Name: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.hortsmedikals.com.ng",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'labtest@hortsmedikals.com.ng', // generated ethereal user
      pass: 'mtfKYbQ8.Ah_', // generated ethereal password
    },
    tls:{
        rejectUnauthorized: false
    },
  });

  // send mail with defined transport object
  let info =  transporter.sendMail({
    from: '"Achu Agbama 👻" <labtest@hortsmedikals.com.ng>', // sender address
    to: "achuulimagbama@yahoo.com, achuulimagbama@gmail.com,alfredagbama@gmail.com, achunero24@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // res.render('layouts/main', {msg: 'Email has been sent'});
  res.send({msg:'Email has been sent'})
});

app.listen(PORT, () => console.log('server started at',PORT))