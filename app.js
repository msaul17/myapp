var express = require('express');
var app = express();
var name = "Matthew";

app.get('/:id', function (req, res) {  
  res.send('My name is ' + req.params.id );
});

var server = app.listen(5000, function () { // Changed this to 5000 - some other app must be running on 3000

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

var user1 = {name : "Matthew"};
var user2 = {name : "Bob"};

var userArray = [user1, user2];

var user3 = {name : "Sammy"};
var user4 = {name : "Jake"};
var user5 = {name : "Henry"};

var books = {
	title1: "good book1",
	title2: "good book2",	
	title3: "good book3"	
	};

var userArray2 = [user3, user4, user5];

// app.get('/api/users/:y', function (req, res) {  // Why is this working? 
//   res.json(userArray);
// });

app.get('/api/users', function (req, res) {  
  res.json(userArray);
});

app.get('/api/user', function (req, res) {  // Why does it still return userArray when I define '/api/users/userArray2'
  res.json(userArray2);						// The app.get('/api/users/:y' ...) is throwing it off. 
});

app.get('/api/users/anything', function (req, res) {  // Why does it still return userArray when I define '/api/users/userArray2'
  res.json(userArray2);
});

app.get('/api/books', function (req, res) {  
  res.json(books);
});

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});





// // respond with "Hello World!" on the homepage
// app.get('/my_name_is/:name', function (req, res) {
//   res.send('My name is ' + res.params.name );
// });

// // accept POST request on the homepage
// app.post('/', function (req, res) {
//   res.send('Got a POST request');
// });

// // accept PUT request at /user
// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user');
// });

// // accept DELETE request at /user
// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user');
// });