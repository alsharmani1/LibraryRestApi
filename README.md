# LibraryRestApi
This app was built using Node, Express, and MongoDb and is a 
REST API that gets, posts, updates, and deletes books from library.
In order to work with the api you can use any REST client like postman to make 
http requests to http://localhost:3000.

The book data is simple, it only includes:
title
Description

Data Example:
{
"tile": "My Book",
"description": "This is my book!"
}

Routes:
 - Get all books: Make a get request to /posts
 - Add a book: Make a post request to /posts
 - Edit a book: Make a patch request to /posts/:postId
 - Delete a book: Make a delete request to /posts/:postId
 

If you would like to try this app 
