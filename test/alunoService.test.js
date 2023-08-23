const assert = require('assert');
const { AlunoRepository } = require('../src/application/alunoRepository');
const { AlunoService } = require('../src/application/alunoService');
const { before } = require('node:test');

describe('Aluno Service', () => {
    let alunoService;

    beforeEach(() => {
        const alunoRepository = new AlunoRepository();
        alunoService = new AlunoService(alunoRepository);
    });
    
    it('deve criar um aluno com sucesso', () => {
        const aluno = alunoService.create({ nome: "teste", notaFinal: 100 });

        assert.strictEqual(aluno.nome, "teste");
        assert.strictEqual(aluno.notaFinal, 100);
        assert.ok(aluno.id);
    });

    it('deve consultar um aluno com sucesso', () => {
        const aluno = alunoService.create({ nome: "teste", notaFinal: 100 });
        const alunoEncontrado = alunoService.findByNome(aluno.nome)[0];

        assert.strictEqual(alunoEncontrado.nome, "teste");
        assert.strictEqual(alunoEncontrado.notaFinal, 100);
        assert.strictEqual(alunoEncontrado.id, aluno.id);
    });

    it('deve remover um aluno pelo nome com sucesso', () => {
        const aluno = alunoService.create({ nome: "teste", notaFinal: 100 });
        const result = alunoService.removeByNome(aluno.nome);

        assert.strictEqual(result, true);

    });

    it("deve mostrar a nota pelo nome", () => {
        const aluno = alunoService.create({ nome: "teste", notaFinal: 100 });
        const result = alunoService.showNotaByNome(aluno.nome);

        assert.strictEqual(result, aluno.notaFinal);
    });

    it("deve calcular média da turma", () => {
        const aluno = alunoService.create({ nome: "teste", notaFinal: 100 });
        const aluno2 = alunoService.create({ nome: "teste 2", notaFinal: 50 });
        const mediaEsperada = (aluno.notaFinal + aluno2.notaFinal) / 2;

        const mediaResultada = alunoService.showMediaDaTurma();

        assert.strictEqual(mediaResultada, mediaEsperada);


    });
});