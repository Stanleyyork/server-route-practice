var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// DATA
var myBooks = [
	{_id: 1, title: "The Giver", ranking: 2},
	{_id: 2, title: "Having Fun with Ruby", ranking: 3},
	{_id: 3, title: "Capital in the 21st Century", ranking: 1},
];

//ROUTES
// Get - Homepage
app.get('/', function(req, res){
	res.send('Welcome to our books homepage');
});
// Get - API - All Books
app.get('/api/books', function(req, res){
	res.json(myBooks);
});
// Get - API - Single Book
app.get('/api/books/:id', function(req, res){
	var singleBookId = parseInt(req.params.id);
	var singleBook = myBooks.filter(function(book){
		return book._id == singleBookId;
	})[0];

	res.json(singleBook);
});
// Post - API - One Book
app.post('/api/books', function(req, res){
	console.log(req.body);
	var newBook = req.body;
	newBook._id = 4;
	myBooks.push(newBook);
	res.json(newBook);
});

// SERVER PORT
var server = app.listen(3000, function(){
	console.log("Server is running");
});