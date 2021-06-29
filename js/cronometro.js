function calculaTempo () {
	const dataDoCasamento = new Date("2022-07-17").getTime();
	const hoje = new Date().getTime();

	const cronometro = dataDoCasamento - hoje;

	return Math.floor(cronometro / (1000 * 60 * 60 *24));
}

function determinaTextos (numeroDeDias) {
	if (numeroDeDias > 1) {
		return {
			subtitulo: "Faltam",
			mensagem: "Dias",
			mostraTempo: true
		};
	} else if (numeroDeDias === 1) {
		return {
			subtitulo: "Falta",
			mensagem: "Dia",
			mostraTempo: true
		};
	} else if (numeroDeDias === 0) {
		return {
			subtitulo: "É hoje!",
			mensagem: "Fique atento no relógio para chegar na hora :)",
			mostraTempo: false
		};
	} else {
		return {
			subtitulo: "Já foi!",
			mensagem: "Obrigada a todos que participaram!",
			mostraTempo: false
		};
	}
}

function escreveTempo() {
	const tempo = calculaTempo();
	const textos = determinaTextos(tempo);

	document.querySelector(".cronometro__subtitulo").textContent = textos.subtitulo;
	document.querySelector(".cronometro__medida").textContent = textos.mensagem;

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
