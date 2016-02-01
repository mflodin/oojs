(function () {
    var Button = app.Button;
	window.onload = function onload () {
		var b1 = Object.create(Button);
		b1.setup('5rem', '2rem', 'primary', 'Hello');
		b1.on('click', function() {
			console.log(this.label);
		}.bind(b1));

		var b2 = Object.create(Button);
		b2.setup('10rem', '2rem', '', 'Hi');
		b2.on('click', function () {
			console.log(b2.label);
		});


		b1.render(document.body);
		b2.render(document.body);

		b2.css({
			'background': 'deeppink',
			'border': '1px solid mediumvioletred',
			'margin-left': '1rem'
		});
	};
})();