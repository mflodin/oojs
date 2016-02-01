(function () {
	var Widget = function () {
		var el;
		var publicAPI = {
			width: '10rem',
			height: '4rem',
			className: ''
		};

		publicAPI.init = function init(opts) {
			if(!opts) { return; }
			el = opts.el || el;
			publicAPI.width = opts.width || publicAPI.width;
			publicAPI.height = opts.height || publicAPI.height;
			publicAPI.className = opts.className || publicAPI.className;
			if(el) {
				el.className = publicAPI.className;
				el.style.width = publicAPI.width;
				el.style.height = publicAPI.height;
			}
		};

		publicAPI.render = function render(attachPoint) {
			if(el) {
				attachPoint.appendChild(el);
			}
		};

		publicAPI.on = function on(evt, fn) {
			if(el) {
				el.addEventListener(evt, fn);
			}
		};

		publicAPI.css = function css(styles) {
			if(!el) { return; }
			var styleNames = Object.keys(styles);
			[].forEach.call(styleNames, function(styleName) {
				el.style[styleName] = styles[styleName];
			});
		};

		return publicAPI;
	};

	var Button = function() {
		var publicAPI = Widget();
		var widgetInit = publicAPI.init;
		publicAPI.label = 'Button';
		publicAPI.init = function init(opts) {
			publicAPI.label = opts.label || publicAPI.label;
			opts.el = document.createElement('button');
			opts.el.innerHTML = publicAPI.label;
			widgetInit(opts);
		};

		return publicAPI;
	};

	window.onload = function onload() {
		var b1 = Button();
		b1.init({width: '5rem', height: '2rem', className: 'primary',label: 'Hello'});
		b1.on('click', function() {
			console.log(b1.label);
		}.bind(b1));

		var b2 = Button();
		b2.init({width: '10rem',height:  '2rem', className: '', label:'Hi'});
		b2.on('click', function () {
			console.log(b2.label);
		});


		b1.render(document.body);
		b2.render(document.body);

		b2.css({
			'background': 'deepskyblue',
			'border': '1px solid dodgerblue',
			'margin-left': '10px'
		});
	};


})();