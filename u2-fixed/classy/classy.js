(function () {
	function Widget(width, height, className) {
		this.width = width;
		this.height = height;
		this.className = className;
		if(this.el) {
			this.el.className = className;
			this.el.style.width = width;
			this.el.style.height = height;
		}
	}

	Widget.prototype.render = function render(attachPoint) {
		if(this.el) {
			attachPoint.appendChild(this.el);
		}
	};

	Widget.prototype.on = function (evt, fn) {
		if(this.el) {
			this.el.addEventListener(evt, fn);
		}
	};

	Widget.prototype.css = function css(styles) {
		if(!this.el) { return; }
		var styleNames = Object.keys(styles);
		var el = this.el;
		[].forEach.call(styleNames, function(styleName) {
			el.style[styleName] = styles[styleName];
		});
	};

	function Button(width, height, className, label) {
		this.label = label;
		this.el = document.createElement('button');
		this.el.innerHTML = label;
		Widget.apply(this, arguments)
	}

	Button.prototype = Object.create(Widget.prototype);

	window.onload = function onload () {
		var b1 = new Button('5rem', '2rem', 'primary', 'Hello');
		b1.on('click', function() {
			console.log(this.label);
		}.bind(b1));

		var b2 = new Button('10rem', '2rem', '', 'Hi');
		b2.on('click', function () {
			console.log(b2.label);
		});


		b1.render(document.body);
		b2.render(document.body);

		b2.css({
			'background': 'gold',
			'border': '1px solid goldenrod',
			'margin-left': '10px'
		});
	};


})();