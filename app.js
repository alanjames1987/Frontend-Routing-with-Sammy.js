(function() {

	var app = Sammy('body');
	app.use(Sammy.Template);

	$(document).ready(function() {
		app.run('#/');
	});

})();