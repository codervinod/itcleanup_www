var express = require('express');
var request = require('request');

var router = express.Router();


router.post('/form', function(req, res, next) {
  request.post('https://www.google.com/recaptcha/api/siteverify',
      {form:{
        secret:process.env.ITCLEANUP_RECAPTCHA_SECRET,
        response:req.body["g_recaptcha_response"]
        }
      }, function callback(error, response, body) {
        if (!error && response.statusCode === 200) {
            var info = JSON.parse(body);
            if (info.success) {
                console.log(info.success);
                console.log(req.body.name);
                console.log(req.body.email);
                console.log(req.body.subject);
                console.log(req.body.message);
                res.status(200).json({response: 'success'});
                return;
            }
            res.status(200).json({response: 'error', errorMessage: 'problem'});
        }
      });
});

router.post('/refresh-captcha', function(req, res, next) {
  res.send()
});

router.post('/verify-captcha', function(req, res, next) {
  res.status(200).json({ response: 'success' });
  //res.status(200).json({ response: 'error', code:strtolower($_SESSION['captchaCode'] });
});

module.exports = router;
