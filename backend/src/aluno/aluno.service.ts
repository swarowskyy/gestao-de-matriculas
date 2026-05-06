import { Injectable } from '@nestjs/common';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunoService {
  // Correção 1: 'alunos' precisa ser uma lista (Array) para guardar mais de um!
  private alunos: Aluno[] = [];

  // Correção 2: Agora ele recebe o objeto 'dados' inteirinho, igual o Controller envia
  create(dados: { codigo_matricula: string; nome_completo: string; situacao: string }) {
    const novoAluno = new Aluno();
    
    // Correção 3: Atribuindo cada valor ao seu respectivo lugar (antes repetia codigo_matricula)
    novoAluno.codigo_matricula = dados.codigo_matricula;
    novoAluno.nome_completo = dados.nome_completo;
    novoAluno.situacao = dados.situacao;

    // Correção 4: Salvando o aluno na nossa "base de dados" (o Array)
    this.alunos.push(novoAluno);

    return 'This action adds a new aluno';
  }

  findAll() {
    return this.alunos;
  }

  findOne(codigo_matricula: string) {
    return `This action returns a #${codigo_matricula} aluno`;
  }

  // Correção 5: Faltava dizer que codigo_matricula era uma string aqui
  update(codigo_matricula: string, dados: Partial<Aluno>) {
    const index = this.alunos.findIndex(aluno => aluno.codigo_matricula === codigo_matricula);
    if (index >= 0) {
      this.alunos[index] = { ...this.alunos[index], ...dados };
      return `A matricula deste aluno #${codigo_matricula} foi atualizada com sucesso.`;
    }
    return `A matricula do aluno #${codigo_matricula} não foi encontrada.`;
  }

  remove(codigo_matricula: string) {
    return `This action removes a #${codigo_matricula} aluno`;
  }
}