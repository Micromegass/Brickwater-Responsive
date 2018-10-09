
$(document).ready(function() {

var userFeed = new Instafeed({
    get: 'user',
    userId: '1761627482',
    limit :3,
    reslution: 'low_resolution',
    accessToken: '1761627482.1677ed0.5c726cfb824247248a383f0f2ea84aba',
    sortBy: 'most-recent',
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
});
userFeed.run();

});

