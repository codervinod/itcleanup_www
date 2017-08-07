var express = require('express');
var router = express.Router();

router.post('/subscribe', function(req, res, next) {
  res.status(200).json({response: 'success'});
  // res.status(200).json({response: 'error', message: 'problem'});
});

module.exports = router;
