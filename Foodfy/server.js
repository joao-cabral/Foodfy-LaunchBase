const express = require('express')
const nunjucks = require('nunjucks')
const receipts = require('./data')

const server = express()

server.use(express.static('public'))
server.use(express.static("assets"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(require, response){
    return response.render("home", { receipts })
})

server.get("/about", function(require, response){
    return response.render("about")
})

server.get("/revenue", function(require, response){
    return response.render("revenue", { receipts })
})

server.get("/recipe", function (require, response) {
    return response.render("recipe")
})

server.get("/recipe/:index", function (require, response) {
    const recipeIndex = require.params.index;

    return response.render("recipe", { recipe: receipts[recipeIndex] })
})

server.listen(5000, function(){
    console.log('Server is Running')
})