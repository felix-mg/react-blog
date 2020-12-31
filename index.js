const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://felix-mg:samsung@react-blog.muiw6.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true}).then(() =>console.log('DB connected'))
                                                                                                                                             .catch(err => console.error(err));
app.get('/', (req,res)=>{
    res.send('hello there')
});





app.listen(5000);