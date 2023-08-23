
class Aluno {
    constructor(nome, notaFinal, id = null) {
        this.nome = nome;
        this.notaFinal = notaFinal;
        this.id = id;
    }

    static factory(dados) {
        return new Aluno(dados.nome, dados.notaFinal, dados.id ? dados.id : null);
    }
}

module.exports = {Aluno: Aluno};

