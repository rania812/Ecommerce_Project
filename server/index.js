require('dotenv').config()
require('express-async-errors');
const fileUpload = require('express-fileupload');
const express = require('express')
const app = express()
const productlistRouter = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const nodemailer = require("nodemailer");


app.use(express.static('./public'));
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
const cors = require('cors')
app.use(cors())
// database
const connectDB = require('./db/connect')

// router

app.use('/api/v1/productlist', productlistRouter)
app.use('/api/v1/user', userRoute)

app.use((req, res) =>{
    res.send("API is running ...")
})



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'iheblashem@gmail.com',
    pass: '7ala8#ScaFC2'
  }
});

var mailOptions = {
  from: 'iheblashem@gmail.com',
  to: 'iheblasshem@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


 
const port = process.env.PORT || 3001
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('database validation complited');
         app.listen(port, () => {
            console.log(`server is listenning on port: ${port}`)
          })
    } catch (error) {
        console.log(error);
    }
}
start();






