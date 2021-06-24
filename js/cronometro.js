function calculaTempo () {
	const dataDoCasamento = new Date("2022-07-17").getTime();
	const hoje = new Date().getTime();

	const cronometro = dataDoCasamento - hoje;

	return Math.floor(cronometro / (1000 * 60 * 60 *24));
}

function determinaTextos () {
	const numeroDeDias = calculaTempo();

	if (numeroDeDias > 1) {
		return {
			subtitulo: "Faltam",
			medidaDeTempo: "Dias"
		}
	} else {
		return {
			subtitulo: "Falta",
			medidaDeTempo: "Dia"
		}
	}
}

function escreveTempo() {
	const textos = determinaTextos();

	document.querySelector(".cronometro__subtitulo").textContent = textos.subtitulo;

	document.querySelector(".cronometro__medida").textContent = textos.medidaDeTempo;

	document.querySelector(".cronometro__tempo").textContent = calculaTempo();	
}

escreveTempo();
