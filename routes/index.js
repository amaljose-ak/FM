var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/view',(req,res)=>{
res.render('users/view')

})
router.get('/podcast',(req,res)=>{
  // res.send("it is used to send the files for stream a file in the correct time")
  res.render('users/podcast')
  // res.redirect('/')
})
router.get('/current',(req,res)=>{
res.render('users/current_prgm')
})

module.exports = router;
