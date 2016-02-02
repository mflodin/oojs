(function () {
	var Widget = function () {
		var el, width, height, className;
		var publicAPI = {
		};

		publicAPI.init = function init(el, width, height, className) {
			// Spara undan argumenten i de privata variablerna
		};

		publicAPI.render = function render(attachPoint) {
			if(el) {
                // Sätt attributen bredd, höjd och klass på elementet
                // Sätt in elementet i DOM:en vid attachPoint
			}
		};

		return publicAPI;
	};

	var Button = function() {
        // Utgå från Widget, men utöka init-funktionen så att den skapar
        // upp en knapp och skickar med det som element till Widgets init.
	};

	window.onload = function onload() {
		// Skapa två knappar med två olika texter
		// När man klickar på knappen ska den logga texten till konsolen

		// Guldstjärna: Skapa en enkel variant av jQuerys on-funktion för att förenkla eventhantering
		// Dubbel guldstjärna: Skapa en enkel variant av jQuerys css-funktion för att sätta style på elementet

	};


})();