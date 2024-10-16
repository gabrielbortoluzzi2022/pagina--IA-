const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAltermativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Qual foi o inventor da honda?",
        alternativas: [
            {
                texto:"Torakusu yamaha",
                afirmacao:"afirmação"
            },
            {
                texto:"soichiro honda",
                afirmacao:"afirmação"
            }
        
        
        ]

    },
    {
        enunciado: "A motocicleta titan 150 é de qual fabricante",
        alternativas: [
            {
                texto:"Honda",
                afirmacao: "Yamaha"
            },
            
        
       
        ]

    },
    {
        enunciado: "A motocicleta ybr 125 é de qual fabricante",
        alternativas: [
        {
            texto:"Honda",
            afirmacao: "Yamaha"
        }
        
       
        ]


    },
    {
        enunciado: "A motocicleta xtz 125 é de qual fabricante",
        alternativas: [
            {
                texto:"Honda",
                afirmacao: "Yamaha"
            }
        
       
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
function mostraAltrnativas() {
    for(const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click",function(){
            atual++;
            mostraPergunta();
        });
        caixaAltermativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();