"use strict";

//Exer: 1°- Criar um array de alunos e notas.

var aluno = [{
  nome: 'Gilmar',
  nota: 5
}, {
  nome: 'Enzo',
  nota: 5
}, {
  nome: 'Paula',
  nota: 5
}, {
  nome: 'Romario',
  nota: 1
}, {
  nome: 'Cristiano',
  nota: 5
}, {
  nome: 'Lionel',
  nota: 5
}];

//2°- Criar uma função que retorna apenas os alunos com nota superior a 6.
var alunoAprovado = aluno.filter(function (aprovado) {
  return aprovado.nota >= 6;
});
console.log(alunoAprovado);