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
