/*CURSO DIGITAL HOUSE 2022 
CHECKPOINT 03 - DISCIPLINA PROGRAMAÇÃO IMPERATIVA 
VANESSA MARGARETH
*/
//Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 

class Aluno {
  constructor(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
  }
  /*Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 
  */
  calculaMedia() {
    let somaNotas = 0
    // for (let soma of this.notas) {
    //   somaNotas += soma
    // }
    this.notas.forEach(elemento => somaNotas += elemento)
    return (somaNotas / this.notas.length)
  }
  aumentaFaltas() {
    let numeroDeFaltas = this.faltas + 1
    console.log(numeroDeFaltas)
  }
}
/*crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2). */
let curso = {
  nomeCurso: 'Como ser Pirata',
  notaAprovacao: 7,
  faltaMaxima: 3,
  listaDeEstudantes: [],
  resultadoGeral: [],
  adicionaAluno(nome, faltas, notas) {
    let nomeIndividual = new Aluno(nome, faltas, notas)
    this.listaDeEstudantes.push(nomeIndividual)
  },
  consultarAluno(nomeAluno) {
    // for (let alunoBuscado of this.listaDeEstudantes) {
    //   if (nomeAluno === alunoBuscado.nome) {
    //     return alunoBuscado
    //   }
    // }
    const alunoBuscado = this.listaDeEstudantes.find(({ nome }) => nome === nomeAluno)
    return alunoBuscado
  },
  /*Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
  */

  verificaAprovacao(nomeAluno) {
    const alunoBuscado = this.consultarAluno(nomeAluno)
    const mediaAluno = alunoBuscado.calculaMedia()
    const faltaAluno = alunoBuscado.faltas
    if (mediaAluno >= this.faltaMaxima && faltaAluno < this.faltaMaxima) {
      return true
    } else if (faltaAluno === this.faltaMaxima && (mediaAluno + mediaAluno * 0.1) > this.notaAprovacao) {
      return true
    } else {
      return false
    }
  },

  relatorioAprovacao() {
    let resultadoGeral = [];
    for (let resultado of this.listaDeEstudantes) {
      resultadoGeral.push({ nome: resultado.nome, aprovado: this.verificaAprovacao(resultado.nome) });
    }
    return resultadoGeral
  }



}
//ADICIONANDO ALUNOS
curso.adicionaAluno('Luffy', 2, [6, 7, 6, 9]);
curso.adicionaAluno('Zoro', 3, [7, 8, 7, 10]);
curso.adicionaAluno('Nami', 3, [2, 5, 6.2, 8.5]);
curso.adicionaAluno('Usopp', 4, [8, 9, 9.5, 6.5]);
curso.adicionaAluno('Sanji', 1, [7.4, 8.3, 3.5, 6]);
curso.adicionaAluno('Chopper', 1, [10, 10, 9.5, 8.6]);


//LISTA DE ESTUDANTES
// console.log(curso.listaDeEstudantes)
// console.log(curso)         //poque aqui não mostra a nota ? somente[array] ?

/*BUSCAR ALUNO */
console.log(curso.consultarAluno('Zoro'))
// console.log(curso.consultarAluno('Chopper'))

/*VERIFICAR APROVAÇÃO */
// console.log(curso.verificaAprovacao('Zoro'))
// console.log(curso.verificaAprovacao('Sanji'))
// console.log(curso.verificaAprovacao('Nami'))

/* RESULTADO GERAL */
// console.log(curso.relatorioAprovacao())