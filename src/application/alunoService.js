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

    showNotaByNome(nome){
        const aluno = this.findByNome(nome)[0];
        return aluno.notaFinal;
    }

    showMediaDaTurma(){
        const todosAlunos = this.repository.findAll();
        if(todosAlunos.length == 0)
            return 0;

        const notaSomada = todosAlunos.reduce((notaSomada, a) => notaSomada + a.notaFinal, 0 );
        return notaSomada / todosAlunos.length;
    }
}

module.exports = { AlunoService: AlunoService };
