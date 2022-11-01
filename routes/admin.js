var express = require('express');
var router = express.Router();

// for admin
 router.get('/', function(req, res, next) {
   res.send('You dont have any kind of autherization');
 
});
router.get('/ak',(req,res)=>{
res.render('admin/main')
})

module.exports = router;
