(function() {

	var app = Sammy.apps.body;

	app.get('#/', function(context) {

		console.log("You're in the Main route");

		context.render('/view/main.ejs', {
			'myVariable': 'Some value'
		}, function(output) {
			console.log(output);
		});

	});

})();