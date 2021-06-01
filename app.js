//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser:true,  useUnifiedTopology: true });

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articleSchema);

////////////////////! Requests Targetting all articles/////////////////////

app.route("/articles")
  .get((req, res) =>{
    Article.find(function(err, foundArticles) {
    if(!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    } 
    });
  })
  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    })

    newArticle.save((err) => {
      if(!err) {
        res.send("Successfully added a new article.");
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    Article.deleteMany((err) => {
      if(!err) {
        res.send("Successfully deleted all articles.");
      } else {
        res.send(err);
      }
    });
  });

////////////////////! Requests Targetting a specific articles/////////////////

app.route("/articles/:articleTitle")
  .get((req, res)=>{

    Article.findOne({title: req.params.articleTitle}, (err, foundArticle) => {
      if(!err) {
        res.send(foundArticle);
      } else {
        res.send(err);
      }
    })
  })
  .put((req, res)=>{
    Article.updateOne(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      {overwrite: true},
      (err) => {
        if(!err) {
          res.send("Succesfully updated article.");
        }
      }
    )
  })
  .patch((req, res)=>{
    Article.updateOne(
      {title: req.params.articleTitle}, 
      {$set: req.body},
      (err) => {
        if(!err) {
          res.send("Succesfully updated article.");
        } else {
          res.send(err);
        }
    })
  })
  .delete((req, res)=>{
    Article.deleteOne({title: req.params.articleTitle}, (err)=> {
      if(!err) {
        res.send("Successfully deleted the article.")
      } else {
        res.send(err);
      }
    });
  });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});