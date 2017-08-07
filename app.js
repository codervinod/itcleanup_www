var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');

var app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index.njk');
});

app.get('/about-us', function(req, res) {
    res.render('about-us.njk');
});

app.get('/contact-us', function(req, res) {
    res.render('contact-us.njk');
});

app.get('/page-404', function(req, res) {
    res.render('page-404.njk');
});

app.get('/page-faq', function(req, res) {
    res.render('page-faq.njk');
});

app.get('/sitemap', function(req, res) {
    res.render('sitemap.njk');
});

module.exports = app;
