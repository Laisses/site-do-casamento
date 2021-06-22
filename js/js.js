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

const mql = window.matchMedia("(min-width: 1024px)");

function lidaComAtualizacaoDeMediaQuery() {
	if (mql.matches) {
		document.querySelector(".botao__icone--hamburguer").classList.remove("esconder");
		document.querySelector(".botao__icone--fecha").classList.add("esconder");
		document.querySelector(".cabecalho__menu--hamburguer").style.display = "none";
	}	
}

mql.onchange = lidaComAtualizacaoDeMediaQuery;
document.querySelector(".botao__icone--hamburguer").onclick = trocaBotoesDoMenu;
document.querySelector(".botao__icone--fecha").onclick = trocaBotoesDoMenu;
