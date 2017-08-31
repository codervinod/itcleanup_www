var express = require('express');
var router = express.Router();

var Mailchimp = require('mailchimp-api-v3');
var mailchimp = new Mailchimp(process.env.ITCLEANUP_MAILCHIMP_API_KEY);

router.post('/subscribe', function (req, res, next) {
    console.log(req.body.email);
    mailchimp.post('/lists/4c06fe49f7/members', {
        email_address: req.body.email,
        status: 'subscribed'

    })
    .then(function (results) {
        console.log(JSON.stringify(results));
        res.status(200).json({response: 'success'});
    })
    .catch(function (err) {
        console.log(err.message);
        res.status(200).json({
            response: 'error',
            message: 'Already subscribed to newsletter'
        });
    });
});

module.exports = router;
