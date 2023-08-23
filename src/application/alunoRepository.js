
class AlunoRepository {
    constructor() {
        this.alunos = [];
        this.contadorId = 1;
    }

    create(aluno) {
        aluno.id = this.contadorId++;
        this.alunos.push(aluno);
        return aluno;
    }

    delete(id) {
        const alunoIndex = this.alunos.findIndex(a => a.id == id);
        this.alunos.splice(alunoIndex, 1);
    }

    findByNome(nome) {
        return this.alunos.filter(a => a.nome == nome);
    }

    findAll() {
        return this.alunos;
    }
}

module.exports = { AlunoRepository: AlunoRepository };
