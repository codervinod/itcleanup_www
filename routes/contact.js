var express = require('express');
var router = express.Router();

router.post('/form', function(req, res, next) {
  res.status(200).json({ response: 'success' });
  // res.status(200).json({ response: 'error', errorMessage:'problem' });
});

router.post('/refresh-captcha', function(req, res, next) {
  res.send()
});

router.post('/verify-captcha', function(req, res, next) {
  res.status(200).json({ response: 'success' });
  //res.status(200).json({ response: 'error', code:strtolower($_SESSION['captchaCode'] });
});

module.exports = router;
