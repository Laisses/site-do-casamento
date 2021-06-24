function calculaTempo () {
	let dataDoCasamento = new Date("Jul 17, 2022").getTime();
	let hoje = new Date().getTime();

	let cronometro = dataDoCasamento - hoje;

	return Math.floor(cronometro / (1000 * 60 * 60 *24));
}

function determinaTextos () {
	let numeroDeDias = calculaTempo();

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
	document.querySelector(".cronometro__subtitulo").textContent = determinaTextos().subtitulo;

	document.querySelector(".cronometro__medida").textContent = determinaTextos().medidaDeTempo;

	document.querySelector(".cronometro__tempo").textContent = calculaTempo();	
}

escreveTempo();
