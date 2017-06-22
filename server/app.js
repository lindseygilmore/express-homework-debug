var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app);
    path = require('path');
    fs = require('fs');
    hbs = require('hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//route 0//
  app.get('/', function(request, response){
    response.send('Hey, the server finally works')
  })


//route 1 handlebar//
  app.get('/home', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.render('home');
  })

//route 2 handlebar//
  app.get('/learn', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.render('learn');
  })

//route 3 JSON//
  app.get('/json1', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    var json1 = {car: 'bmw', model: 'x5', year: '2016'}
    response.send(json1);
  })

//route 4 JSON//
  app.get('/json2', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    var json2 = {movie1: 'Wedding Crashers', movie2: 'The Holiday'}
    response.send(json2);
  })

//route 5 message text
  app.get('/message', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey, my homework is finally done!')
  })


// first argument is the port number
server.listen(5000, function(){
  console.log('server is listening, but on what port, are you reading the code?')
})








