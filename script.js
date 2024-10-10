const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAltermativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Qual foi o inventor da honda?",
        alternativas: [
        "Torakusu yamaha",
        "soichiro honda"
        ]

    },
    {
        enunciado: "A motocicleta titan 150 é de qual fabricante",
        alternativas: [
        "Honda",
        "Yamaha"
        ]

    },
    {
        enunciado: "A motocicleta ybr 125 é de qual fabricante",
        alternativas: [
        "Honda",
        "Yamaha"
        ]


    },
    {
        enunciado: "A motocicleta xtz 125 é de qual fabricante",
        alternativas: [
        "Honda",
        "Yamaha"
        ]

    }

];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAltrnativas();
}
