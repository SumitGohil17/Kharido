const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

dotenv.config({path:'./config.env'});
require('./db/connection');


app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    sameSite: 'none',
    secure: true
}
));
app.use('/register',require('./router/auth'));
const port = process.env.PORT;

const User =  require('./model/userSchema');


const middleware = (req, res, next)=>{
    console.log('Hello this is Middleware');
    next();
}




app.listen(port, ()=>{
    console.log(`Server is running on port:${port}`);
});

app.get('/',(req, res)=>{
    res.send('This is home page');
})

app.get('/about', middleware,(req,res)=>{
    res.send('This is about page');
})



// app.listen(port,()=>{
//     console.log(`Server is running on port:${port} `);
// });

// app.use(bodyParser.json());


// app.post('/register', (req, res) => {
//     console.log(req.body);
//     res.json({message: req.body});
// })

