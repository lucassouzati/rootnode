const assert = require('assert');
const { AlunoRepository } = require('../src/application/alunoRepository');
const { AlunoService } = require('../src/application/alunoService');

describe('Aluno Service', () => {
    it('deve criar um aluno com sucesso', () => {
        const alunoService = new AlunoService(new AlunoRepository());
        const aluno = alunoService.create({ nome: "teste", notaFinal: 100 });

        assert.strictEqual(aluno.nome, "teste");
        assert.strictEqual(aluno.notaFinal, 100);
        assert.ok(aluno.id);
    });
});