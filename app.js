(function() {

	var app = Sammy('body');
	app.use(Sammy.EJS);

	$(document).ready(function() {
		app.run('#/');
	});

})();