(function () {
	var Widget = {
		init: function init(width, height, className) {
            // Spara argumenten på this-objektet
		},

		render: function render(attachPoint) {
			if(this.el) {
                // Sätt attributen bredd, höjd och klass på elementet
                // Sätt in elementet i DOM:en vid attachPoint
			}
		}
	};

	// Skapa en Button länkad till Widget

	Button.setup = function setup(width, height, className, label) {
        // Skapa ett knappelement och sätt det till this.el
        // Sätt label som texten på knappen
        // Kalla på Widgets konstruktor, men glöm inte kontexten
	};

	window.onload = function onload () {
        // Skapa två knappar med två olika texter
        // När man klickar på knappen ska den logga texten till konsolen

        // Guldstjärna: Skapa en enkel variant av jQuerys on-funktion för att förenkla eventhantering
        // Dubbel guldstjärna: Skapa en enkel variant av jQuerys css-funktion för att sätta style på elementet

    };


})();