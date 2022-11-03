var express = require('express');

var router = express.Router();


// for admin
 router.get('/', function(req, res, next) {
   res.render('admin/main')
   })
   router.get('/cv_view',(req,res)=>{

  console.log(cv)
  res.render('admin/cv-collection')

 
});
module.exports = router;
