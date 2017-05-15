var infotweet = require("./keys");

var Twitter = require('twitter');

var client = new Twitter(infotweet.twitterKeys);

var params = {screen_name: 'nodejs'};

//To get information from twitter timeline

client.get('statuses/user_timeline', function(error, tweets, response) {
  if (!error) {
      var counter = 0;
      var counter2 = tweets.length-1;
      while(counter < 20){
        console.log("Tweeted on " + tweets[counter2].created_at + ": " + tweets[counter2].text);
        counter2 = counter2 -1;
        counter = counter + 1;      
      }



  }
});

