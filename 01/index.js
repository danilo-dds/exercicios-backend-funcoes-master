const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
let respostasCorretas = 0;
function corrigirProva(prova) {
    for (let acertos of prova.questoes) {
        if (acertos.resposta === acertos.correta) {
            respostasCorretas += 1;
        }
    }
    const notaAluno = respostasCorretas * 2;
    console.log(`O aluno(a) ${prova.aluno} acertou ${respostasCorretas} questões e obteve nota ${notaAluno}`);
}
corrigirProva(prova);