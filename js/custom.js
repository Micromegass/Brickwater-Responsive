
$(document).ready(function() {

var userFeed = new Instafeed({
    get: 'user',
    userId: '1761627482',
    limit :7,
    reslution: 'standard_resolution',
    accessToken: '1761627482.1677ed0.5c726cfb824247248a383f0f2ea84aba',
    sortBy: 'most-recent',
    template: '<a href="{{link}}"><img src="{{image}}"/></a>',
});
userFeed.run();

});

