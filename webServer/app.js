/**
 # @Author: Chengcheng Mou <ccm>
 # @Date:   02-19-2019
 # @Email:  chengcheng@mail.usf.edu
 # @Last modified by:   ccm
 # @Last modified time: 02-19-2019
 */



const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

//static files
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

//set up template engine
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res) {
  console.log(req.body.city);
  res.render('index');
})




//fire controllers
//controller(app);

//listen to port
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
})
