const mongoose = require('mongoose');

const db = process.env.DB_URL;

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res, rej)=>{
    console.log('Connected to DB');
}).catch((err)=>{
    console.log('Error:', err);
})