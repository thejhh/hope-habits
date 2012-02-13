/* HOPE application */

var hope = require('hope'),
    app = module.exports = hope.createApp();

/* Event handler to start habit instance. Asks user to submit name for new habit. */
app.on('start', function() {
	var dialog = hope.createDialog('Submit name for new habit'),
	    name = hope.createField('Name');
	dialog.add(name);
	dialog.on('submit', function() {
		var instance = hope.createAppInstance('Habit - '+name.value),
		    fields = hope.createFieldset();
		instance.add(fields);
		instance.set('name', name.value);
		function update_view() {
			var name = instance.get('name'),
			    last = new Date(),
			    now = new Date();
			last.setTime(instance.get('last'));
			fields.set('Habit name', name);
			fields.set('Last time', last);
			fields.set('Time elapsed', now.getTime() - last.getTime());
		}
		instance.on('change', update_view);
		update_view();
	});
});

/* EOF */
