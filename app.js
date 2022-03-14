const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const oneDay = 1000 * 60 * 60 * 24;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Session Set Up
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

const utils = require('./utils');

app.get('/', (req, res) => {

  // let data = {
  //   hello: 'world'
  // };

  res.send(JSON.stringify(data));
});

app.get('/ran', (req, res) => {


  if (req.session.data) {
    res.send(req.session.data);
  } else {
    req.session.data = utils(5);
    res.send(req.session.data);
  }
  // res.send(req.session.num);
});

app.get('/destroy', ((req, res) => {

  req.session.destroy();
  res.send('Session destroyed');
}));

app.listen(3020, () => {
  console.log('Running on port 3020');
})