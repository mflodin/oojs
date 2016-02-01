(function () {
	var Widget = {
		init: function init(width, height, className) {
			this.width = width;
			this.height = height;
			this.className = className;
			if(this.el) {
				this.el.className = className;
				this.el.style.width = width;
				this.el.style.height = height;
			}
		},

		render: function render(attachPoint) {
			if(this.el) {
				attachPoint.appendChild(this.el);
			}
		},

		on: function on(evt, fn) {
			if(this.el) {
				this.el.addEventListener(evt, fn);
			}
		},

		css: function css(styles) {
			if(!this.el) { return; }
			var styleNames = Object.keys(styles);
			var el = this.el;
			[].forEach.call(styleNames, function(styleName) {
				el.style[styleName] = styles[styleName];
			});
		}
	};

	var Button = Object.create(Widget);

	Button.setup = function setup(width, height, className, label) {
		this.label = label;
		this.el = document.createElement('button');
		this.el.innerHTML = label;
		this.init(width, height, className);
	};

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
			'margin-left': '10px'
		});
	};


})();