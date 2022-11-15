const express = require("express");

const ejs = require("ejs")

const app = express();

const port = 8081;

app.set('view engine', 'ejs');

app.use(express.static('public'));



app.get('/', (req, res) => {

    const myBio = [
       {
        firstName: "Progress",
        lastName: "Chisom",
        Score: "70",
        State: "Rivers",
        Nationality: "Nigerian"
       }
    ]
    
   res.render('index', {myBio}); 
})




app.listen(port, ()=>{
    console.log('Server is running...')
})