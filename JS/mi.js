function clicable() {
			var element = document.getElementsByTagName('p') [4];
			element.addEventListener ('click', avis);
		}
		function avis() {
			alert ("Has pogut clicar");
		}
		addEventListener ('load', clicable);
