// Banco de dados em JSON
const frases = {
    amor: [
        { texto: "O amor é a força mais sutil do mundo.", autor: "Mahatma Gandhi" },
        { texto: "Amar é encontrar em alguém a razão para viver.", autor: "Albert Camus" }
    ],
    esperanca: [
        { texto: "A esperança é o sonho do homem acordado.", autor: "Aristóteles" },
        { texto: "Enquanto houver vontade de lutar, haverá esperança.", autor: "Santo Agostinho" }
    ],
    sucesso: [
        { texto: "O sucesso é a soma de pequenos esforços repetidos diariamente.", autor: "Robert Collier" },
        { texto: "A única forma de chegar ao impossível é acreditar que é possível.", autor: "Lewis Carroll" }
    ],
    paz: [
        { texto: "A paz vem de dentro de você mesmo. Não a procure à sua volta.", autor: "Buda" },
        { texto: "Não existe caminho para a paz. A paz é o caminho.", autor: "Gandhi" }
    ]
};

// Modelos 3D diferentes por sentimento (exemplo)
const modelos = {
    amor: "models/heart.gltf",
    esperanca: "models/leaf.gltf",
    sucesso: "models/rocket.gltf",
    paz: "models/dove.gltf"
};

function showContent(sentimento) {
    // Pegando frase aleatória
    const lista = frases[sentimento];
    const random = lista[Math.floor(Math.random() * lista.length)];

    // Colocando no HTML
    document.getElementById("quoteText").innerText = `"${random.texto}"`;
    document.getElementById("quoteAuthor").innerText = `— ${random.autor}`;

    // Trocando o modelo 3D
    const modelEntity = document.getElementById("model");
    modelEntity.setAttribute("gltf-model", modelos[sentimento]);
}
