var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Home', function(req, res, next) {
  res.render('Home', { title: 'Amazon' });
});

// get about us page
router.get('/about',function (req,res, next){
  // res.get('',{title: 'This is our first app generator'});
    console.log("About Us Page");
    // render the about_us template with the data object containing information about the company
    res.render('about',{title : 'This is our first app generator'});
});

module.exports = router;
