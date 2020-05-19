const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const contactRouter = require('./routes/contact');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', (req, res)=> {
    res.render('index', {
        title: 'This is my website',
        
    });
});

app.use('/contact', contactRouter);


app.listen(port, ()=> {
    console.log(`running on http://localhost:${port}`)
});