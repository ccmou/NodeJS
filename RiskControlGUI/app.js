/**
 * @Author: Chengcheng Mou <ccm>
 * @Date:   02-19-2019
 * @Email:  chengcheng@mail.usf.edu
 * @Last modified by:   ccm
 * @Last modified time: 02-19-2019
 */



const express = require('express');
const app = express();

var controller = require('./controllers/controller')

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
//controller(app);

//listen to port
const server = app.listen(8080);
console.log(`You are listening to port ${server.address().port}`);
