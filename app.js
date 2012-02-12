/* HOPE sample application */

var hope = require('hope-app'),
    app = module.exports = hope.createApp();

app.on('start', function() {
	app.add(hope.createMessage('Hello world!'));
});

/* EOF */
