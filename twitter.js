// const twttr = new Twitter;
const container = document.getElementById('container');

twttr.widgets.createTweet(1, container)
.then( function( el ) {
  console.log('Tweet added.');
});


twttr.widgets.createTweet(
    '199',
    document.getElementById('container'),
    {
      theme: 'dark'
    }
  );

  twttr.widgets.createTimeline(
    {
      sourceType: 'profile',
      screenName: 'bbaccz'
    },
    document.getElementById('timeline'),
    {
      width: '600',
      height: '400',
      related: 'bbaccz,twitterapi'
    }).catch(function (err) {
      console.log(err)
    });