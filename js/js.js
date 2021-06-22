function trocaBotoesDoMenu() {
	document.querySelector(".botao__icone--hamburguer").classList.toggle("esconder");
	document.querySelector(".botao__icone--fecha").classList.toggle("esconder");

	const menu = document.querySelector(".cabecalho__menu--hamburguer");
	if (menu.style.display === "flex") {
		menu.style.display = "none";
	} else {
		menu.style.display = "flex";
	}
}

//Tem que deixar a variável fora da função porque ele que informa qual o media query??? 
//You can create a MediaQueryList by calling matchMedia() on the window object
//The Window interface's matchMedia() method returns a new MediaQueryList object that can then be used to determine if the document matches the media query string, as well as to monitor the document to detect when it matches (or stops matching) that media query.

let viewport = window.matchMedia("(min-width: 1024px)");


function lidaComMenuHamburguerQuandoATelaTaGrandeMomoMeAjudaNaoEntendiDireitoNemSeiNomearFuncoes() {
	if (viewport.matches) {
		document.querySelector(".cabecalho__menu--hamburguer").style.display = "none";
	}	
}

viewport.onchange = lidaComMenuHamburguerQuandoATelaTaGrandeMomoMeAjudaNaoEntendiDireitoNemSeiNomearFuncoes;


document.querySelector(".botao__icone--hamburguer").onclick = trocaBotoesDoMenu;
document.querySelector(".botao__icone--fecha").onclick = trocaBotoesDoMenu;
