const { Aluno } = require("../domain/aluno");

class AlunoService {

    constructor(repository) {
        this.repository = repository;
    }

    create(dados) {
        const aluno = Aluno.factory(dados);
        return this.repository.create(aluno);
    }

    findByNome(nome){
        const aluno = this.repository.findByNome(nome);
        if (!aluno)
            throw new Error("Aluno não encontrado!");

        return aluno;
    }

    removeByNome(nome){
        const aluno = this.findByNome(nome)[0];
        try {
            this.repository.delete(aluno.id);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

module.exports = { AlunoService: AlunoService };
