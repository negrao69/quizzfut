const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você joga futebol, prefere atacar ou defender?",
        alternativas: [
        {
        texto: "Atacar",
        afirmacao: [
        " Se você prefere atacar, é uma pessoa ousada e gosta de criar oportunidades. ",
        ],
        
        },
        {
        texto: " Defender",
        afirmacao: [
        " Se prefere defender, é mais estratégico e focado em evitar riscos.",
        
        ],
       
        },
    ]
        },
        {
        enunciado: "Você gosta mais de jogar em equipe ou individualmente?",
        alternativas: [
        {
        texto: " Em equipe",
        
        afirmacao: [
        "Quem prefere jogar em equipe valoriza a colaboração e a coletividade.",
        
        ],
       
        },
        {
        texto: "Individualmente",
        
        afirmacao: [
        " Quem gosta de jogar individualmente prefere ter controle e confiar mais em suas próprias habilidades.",
        
        ],
      
        },
        ]
        },
        {
        enunciado: "Se seu time está perdendo por 1 gol nos últimos minutos, você:",
        alternativas: [
        {
        texto: " Parte para o ataque com tudo",
        
        afirmacao: [
        " Quem vai para o ataque com tudo é competitivo e determinado.",
    
        ],
       
        },
        {
        
        texto: "Mantém a calma e tenta organizar uma jogada",
        
        afirmacao: [
        " Quem tenta organizar uma jogada é mais paciente e estrategista.",
        
        ],
       
        },
        ]
        },
        {
        enunciado: "Você prefere driblar vários adversários ou fazer um passe preciso?",
        alternativas: [
        {
        texto: " Driblar",
        
        afirmacao: [
        " Se você prefere driblar, adora o brilho individual e a criatividade.",
        
        ],
      
        },
        {
        texto: " Fazer o passe",
        
        afirmacao: [
        "Se prefere o passe, valoriza o jogo coletivo e a eficácia.",
        
        ],
       
        },
        ]
        },
        
        {
        enunciado: "Você se destaca mais pela força física ou pela técnica?",
        alternativas: [
        {
        texto: "Força física",
        
        afirmacao: [
        " Se sua força física se destaca, você é uma pessoa determinada e resiliente.",
        
        ],
       
        },
        {
        texto: " Técnica",
        
        afirmacao: [
        "Se é mais técnico, tem um pensamento estratégico e habilidade refinada.",
        
        ],
        
        },
        ]
        },
        {
        enunciado: "Como você reage a uma falta dura?",
        alternativas: [
        {
        texto: "Levanta e continua o jogo",
        
        afirmacao: [
        
        " Se você levanta e segue o jogo, é resiliente e não se deixa abalar facilmente.",
        
        ],
      
        
        },
        {
        texto: " Reclama com o juiz",
        
        afirmacao: [
        " Se reclama com o juiz, você busca justiça e tem um senso crítico forte.",
        
        ],
        
        },
        ]
        },
        {
        enunciado: "Você prefere assistir a um jogo de futebol com muitos gols ou com uma defesa sólida?",
        alternativas: [
        {
        texto: "Muitos gols",
        
        afirmacao: [
        " Quem prefere muitos gols adora emoção e dinamismo. ",
        
        ],
       
        },
        {
        texto: " Defesa sólida",
        
        afirmacao: [
        " Quem gosta de uma defesa sólida aprecia táticas e a arte de neutralizar o adversário.",
        
        ],
       
        },
        ]
        },
        
        {
        enunciado: "Quando seu time faz um gol, você:",
        alternativas: [
        {
        texto: "Comemora intensamente e faz festa",
        afirmacao: [
        "Se você comemora intensamente, é uma pessoa que vive o momento com paixão. ",
         
        ],
        },
        {
        texto: " Comemora de forma mais contida, esperando o próximo lance",
        
        afirmacao: [
        "Se comemora de forma mais contida, prefere manter o foco até o fim do jogo.",
          
        ],
        },
        ]
        }
        ];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigada por responder";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();