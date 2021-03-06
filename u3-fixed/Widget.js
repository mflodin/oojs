(function() {
    app.Widget = {
        init: function init(width, height, className) {
            this.width = width;
            this.height = height;
            this.className = className;
        },

        render: function render(attachPoint) {
            if(this.el) {
                this.el.className = this.className;
                this.el.style.width = this.width;
                this.el.style.height = this.height;
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
})();