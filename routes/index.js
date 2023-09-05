var express = require('express');
var router = express.Router();
var fs =  require('fs')




const STUDENT = require('../model/student')



// console.log(alldata)


/* GET home page. */

router.get('/', async function(req, res, next) {
  let initialVal = {}

  if (req.query.editid) {
    initialVal =  await STUDENT.findById(req.query.editid)
  }

  const data = await STUDENT.find()

  if(req.query.deleteid){
    await STUDENT.findByIdAndRemove(req.query.deleteid)
    res.redirect('/')
  }

  res.render('index', { data: data , values: initialVal , eid:req.query.editid });
});


router.get('/detail', function(req, res, next) {
  console.log(req.query.no);  
  let index = allData[req.query.no]
  res.render('detail', { all : index });
});





router.post('/add',async function(req, res, next) {
  // console.log(req.body.updateid)
  if (req.body.updateid) {
    await STUDENT.findByIdAndUpdate(req.body.updateid, req.body)
  }else{
    // allData.push(req.body)
   await STUDENT.create(req.body)
  }
  res.redirect('/')
});





module.exports = router;



