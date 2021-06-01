# API-Express.js-MongoDB

It is an API for dealing with articles in a wikipedia database.

## Installation

Clone the repository, open the Terminal or Command Prompt in the current directory and execute the following command.

```bash
npm install
```

## Usage

Run the server using following command.

```bash
nodemon app.js
(or)
node app.js
```

You must a MongoDB installed and run up the mongod server to establish a connection to the server.
Use postman tool to make get, post, put and delete requests.

```javaScript
GET: localhost:3000/articles          // Fetches all articles from database
POST: localhost:3000/articles         // Posts your article to the database
DELETE: localhost:3000/articles       // Deletes all articles from the database

// Requests for specific articles
GET: localhost:3000/articles/specificArticle          // Fetches the article which matches with the argument passed in the url
PUT: localhost:3000/articles/specificArticle          // Replaces the data for the whole article which matches with the argument passed in the url
PATCH: localhost:3000/articles/specificArticle        // Patches the data for the article which matches with the argument passed in the url
DELETE: localhost:3000/articles/specificArticle       // Delete article which matches with the argument passed in the url
```

## Sample case

![postman-api](https://github.com/Ganesh-Sindagi/API-Express.js-MongoDB/blob/main/api-img.PNG?raw=true)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
