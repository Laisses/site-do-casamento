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

document.querySelector(".botao__icone--hamburguer").onclick = trocaBotoesDoMenu;
document.querySelector(".botao__icone--fecha").onclick = trocaBotoesDoMenu;
