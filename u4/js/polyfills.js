// Här kan du lägga in olika polyfills om det är andra funktioner du vill
// ha som inte är standard än. element.remove är rätt bra att ha t.ex.

if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
