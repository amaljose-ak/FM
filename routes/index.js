var express = require('express');
// const db = require('mon/src/db');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/view', (req, res) => {
  res.render('users/view')

})
router.get('/podcast', (req, res) => {

  res.render('users/podcast')

})
router.get('/current', (req, res) => {
  res.render('users/current_prgm')
})
router.get('/listen', (req, res) => {
  res.redirect('http://radio.garden/visit/kochi/QatXdaoZ')
})
router.get('/listen1',(req,res)=>{
  res.redirect('https://radiosindia.com/')
})
router.get('/back', (req, res) => {
  res.render('index')
})
router.get('/register', (req, res) => {
  res.render('users/register')
})
router.get('/equipment', (req, res) => {
  res.render('users/equipment')
})
router.get('/interface', (req, res) => {
  res.render('equipments/audio')
})
router.post('/regist', (req, res) => {
  // console.log(req.body)
  MongoClient.connect('mongodb://0.0.0.0:27017', function (err, client) {
    if (err) {
      console.log(err)
    } else {
      // console.log('connected successfully')
      client.db('recruiters').collection('cv').insertOne(req.body)
    }
  })
  res.send('all ready')

})
router.get('/mixer',(req,res)=>{
  res.render('equipments/mixer')
})
router.get('/daw',(req,res)=>{
  res.render('equipments/Daw')
})

module.exports = router;
