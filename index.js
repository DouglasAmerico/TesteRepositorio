let leitor = require("prompt-sync")();

let aluno = {
    nome : null,
    idade: null,
    sexo: null,
    notas : [],
    media: 0
}

let turma;
let qtdDeNotas= leitor("Informa quantas notas teremos por aluno: ");

for (let index = 0; index < 1; index++) {
    aluno = {aluno}
    aluno.nome= leitor("Informe o nome do "+Number(index+1)+" ° aluno: ");
    aluno.idade= leitor("Informe a idade do(a) aluno(a)"+aluno.nome+": ");
    aluno.sexo= leitor("Informe o sexo do(a) aluno(a)"+aluno.nome+": ");
    for (let i = 0; i < qtdDeNotas; i++) {
        aluno.notas[i]= leitor("Informe a nota "+Number(i+1)+" do(a) aluno(a)"+aluno.nome+": ");
        aluno.media= aluno.notas[i] + aluno.media;
    }
    turma = aluno;
}

console.log("Hello Word");

console.log(turma);