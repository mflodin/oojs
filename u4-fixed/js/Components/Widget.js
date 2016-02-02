(function() {
    app.Widget = {
        init: function init(opts) {
            opts = opts || {};
            this.className = opts.className;
        },

        render: function render(attachPoint) {
            if(this.el) {
                this.el.className = this.className;
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