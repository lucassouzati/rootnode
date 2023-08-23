const { Aluno } = require("../domain/aluno");

class AlunoService {

    constructor(repository) {
        this.repository = repository;
    }

    create(dados) {
        const aluno = Aluno.factory(dados);
        return this.repository.create(aluno);
    }

    // removeAlunoByNome(nome){
    //     const aluno = this.repository.findByNome(nome);
    //     if (!aluno)
    //         throw new Error("Aluno não encontrado!");
    // }
}

module.exports = { AlunoService: AlunoService };
