var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects');
});
router.get('/project', function(req, res, next) {
  res.render('projects');
});

router.get('/people', function (req, res, next) {
    res.render('people');
});

router.get('/about', function (req, res, next) {
    res.render('about');
});

router.get('/research', function (req, res, next) {
    res.render('research');
});
router.get('/services', function (req, res, next) {
    res.render('services');
});

router.get('/teaching', function (req, res, next) {
    res.render('teaching');
});

router.get('/gallery', function (req, res, next) {
    res.render('gallery');
});





module.exports = router;
