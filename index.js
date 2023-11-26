const express = require('express')
const app = express()
const fs = require('fs');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));

app.use(express.urlencoded({ extended: true }));


app.all('/', (req, res) => {
   res.render('index', { title: 'My Express App' });
})

app.use('/static',express.static('./static'))

app.listen(process.env.PORT || 3000)
