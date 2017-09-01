var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.ITCLEANUP_TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.ITCLEANUP_TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.ITCLEANUP_TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ITCLEANUP_TWITTER_ACCESS_TOKEN_SECRET
});

router.get('/feed', function(req, res, next) {
  var params = {
    screen_name: req.body.twitter_screen_name,
    count: req.body.tweets_to_display
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error){
      return res.status(200).send('Oops, our twitter feed is unavailable right now.');
    }
    var tweet_list='<ul>';
    for (var i in tweets) {
      tweet_list += '<li><span class="status"><i class="fa fa-twitter"></i> ';
      tweet_list += '</span><span class="meta"> ';
      tweet_list += tweets[i].text;
      tweet_list += '</span>';
      tweet_list += '</li>';
    }
    tweet_list += '</ul>';
    res.status(200).send(tweet_list);
  });
});

module.exports = router;
