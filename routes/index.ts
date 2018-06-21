import * as express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req;
  next;
  res.render('index', { title: '1111' });
});

module.exports = router;
