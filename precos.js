const fs = require("fs");

const txt = fs.readFileSync("precos.txt", "UTF-8");

const json =
	txt
		.split("\n\n")
		.map(presente => {
			const [nome, preco] = presente.split("\n");
			return {
				nome,
				preco,
				alt: nome,
				link_de_pagamento: "https://FIXME",
				imagem: "assets/img/presentes/porta-talheres.jpg"
			};
		});

const jsonTxt = JSON.stringify({ presentes: json }, null, "\t");

fs.writeFileSync("lista-de-presentes.json", jsonTxt);
