function calculaTempo () {
	const dataDoCasamento = new Date("2022-07-17").getTime();
	const hoje = new Date().getTime();

	const cronometro = dataDoCasamento - hoje;

	return Math.floor(cronometro / (1000 * 60 * 60 *24));
}

function determinaTextos (numeroDeDias) {
	if (numeroDeDias > 1) {
		return {
			titulo1: "Faltam",
			titulo2: "Dias",
			mostraTempo: true
		};
	} else if (numeroDeDias === 1) {
		return {
			titulo1: "Falta",
			titulo2: "Dia",
			mostraTempo: true
		};
	} else if (numeroDeDias === 0) {
		return {
			titulo1: "É hoje!",
			titulo2: "Fique atento no relógio para chegar na hora :)",
			mostraTempo: false
		};
	} else {
		return {
			titulo1: "Já foi!",
			titulo2: "Obrigada a todos que participaram!",
			mostraTempo: false
		};
	}
}

function escreveTempo() {
	const tempo = calculaTempo();
	const textos = determinaTextos(tempo);

	document.querySelector(".cronometro__subtitulo").textContent = textos.titulo1;
	document.querySelector(".cronometro__medida").textContent = textos.titulo2;

	const cronometro = document.querySelector(".cronometro__tempo");
	if (textos.mostraTempo) {
		cronometro.textContent = tempo;
		cronometro.classList.remove("esconder");
	} else {
		cronometro.classList.add("esconder");
	}
}

window.addEventListener("DOMContentLoaded", function() {
	escreveTempo();
});
