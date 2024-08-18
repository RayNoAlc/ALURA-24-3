const historia = document.getElementById('historia');
const caixaPerguntas = document.getElementById('caixa-perguntas');

let passoAtual = 0;

const historiaEperguntas = [
    {
        texto: "Você está prestes a embarcar em uma jornada para desvendar os mistérios da inteligência artificial. Pronto para começar?",
        opcoes: [
            { texto: "Sim, estou pronto!", proximoPasso: 1 },
            { texto: "Não, quero aprender mais sobre IA primeiro.", proximoPasso: 2 }
        ]
    },
    {
        texto: "Ótimo! Vamos começar com uma pergunta simples: Quem é considerado o pai da IA?",
        opcoes: [
            { texto: "Alan Turing", proximoPasso: 3 },
            { texto: "Isaac Asimov", proximoPasso: 4 },
            { texto: "Elon Musk", proximoPasso: 4 }
        ]
    },
    {
        texto: "Inteligência Artificial (IA) é um campo da ciência da computação focado na criação de sistemas capazes de realizar tarefas que normalmente requerem inteligência humana. Vamos começar?",
        opcoes: [
            { texto: "Sim, estou pronto agora!", proximoPasso: 1 }
        ]
    },
    {
        texto: "Correto! Alan Turing é frequentemente referido como o pai da IA. Ele foi pioneiro em muitas das ideias fundamentais por trás do conceito de máquinas inteligentes.",
        opcoes: [
            { texto: "Continuar", proximoPasso: 5 }
        ]
    },
    {
        texto: "Essa resposta não está correta. Alan Turing, e não Asimov ou Musk, é considerado o pai da IA. Ele propôs o 'Teste de Turing' como uma medida da capacidade de uma máquina de exibir comportamento inteligente.",
        opcoes: [
            { texto: "Continuar", proximoPasso: 5 }
        ]
    },
    {
        texto: "O que você acha que foi o primeiro uso real de IA?",
        opcoes: [
            { texto: "Jogos de xadrez", proximoPasso: 6 },
            { texto: "Reconhecimento de voz", proximoPasso: 7 },
            { texto: "Previsão do tempo", proximoPasso: 7 }
        ]
    },
    {
        texto: "Correto! Um dos primeiros usos notáveis da IA foi em jogos de xadrez. Máquinas como o Deep Blue da IBM foram capazes de derrotar campeões humanos.",
        opcoes: [
            { texto: "Continuar", proximoPasso: 8 }
        ]
    },
    {
        texto: "Não exatamente. Embora esses sejam usos atuais de IA, um dos primeiros usos foi em jogos de xadrez, onde a IA demonstrou sua capacidade de superar jogadores humanos.",
        opcoes: [
            { texto: "Continuar", proximoPasso: 8 }
        ]
    },
    {
        texto: "A IA continua a evoluir rapidamente, mudando a forma como vivemos e trabalhamos. Quer saber mais sobre os tipos de IA ou como ela é usada no dia a dia?",
        opcoes: [
            { texto: "Tipos de IA", proximoPasso: 9 },
            { texto: "Usos no dia a dia", proximoPasso: 10 }
        ]
    },
    {
        texto: "Existem três tipos principais de IA: IA limitada (ou estreita), IA geral e IA superinteligente. A IA limitada é o tipo que temos hoje, projetada para realizar tarefas específicas.",
        opcoes: [
            { texto: "Entendi, e como é usada no dia a dia?", proximoPasso: 10 }
        ]
    },
    {
        texto: "No dia a dia, a IA está presente em assistentes virtuais, recomendações de produtos, sistemas de navegação, e muito mais. A IA está se tornando uma parte integral da vida moderna.",
        opcoes: [
            { texto: "Fim do Jogo", proximoPasso: null }
        ]
    }
];

function carregarPasso(passo) {
    const etapa = historiaEperguntas[passo];
    historia.innerHTML = etapa.texto;
    caixaPerguntas.innerHTML = '';
    etapa.opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.className = 'opcao';
        botao.textContent = opcao.texto;
        botao.addEventListener('click', () => {
            if (opcao.proximoPasso !== null) {
                carregarPasso(opcao.proximoPasso);
            } else {
                alert("Obrigado por jogar!");
            }
        });
        caixaPerguntas.appendChild(botao);
    });
}

carregarPasso(passoAtual);
