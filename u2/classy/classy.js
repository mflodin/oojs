(function () {
	function Widget(width, height, className) {
		// Spara argumenten på this-objektet
	}

	Widget.prototype.render = function render(attachPoint) {
		if(this.el) {
			// Sätt attributen bredd, höjd och klass på elementet
			// Sätt in elementet i DOM:en vid attachPoint
		}
	};

	function Button(width, height, className, label) {
        // Skapa ett knappelement och sätt det till this.el
        // Sätt label som texten på knappen
        // Kalla på Widgets konstruktor, men glöm inte kontexten
	}

	// Länka ihop prototyperna för Button och Widget

	window.onload = function onload () {
		// Skapa två knappar med två olika texter
        // När man klickar på knappen ska den logga texten till konsolen

        // Guldstjärna: Skapa en enkel variant av jQuerys on-funktion för att förenkla eventhantering
        // Dubbel guldstjärna: Skapa en enkel variant av jQuerys css-funktion för att sätta style på elementet
	};


})();