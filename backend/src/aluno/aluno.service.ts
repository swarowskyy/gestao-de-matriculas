import { Injectable, NotFoundException } from '@nestjs/common';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunoService {
  // Lista que simula o nosso banco de dados
  private alunos: Aluno[] = [];

  create(dados: { codigo_matricula: string; nome_completo: string; situacao: string }) {
    const novoAluno = new Aluno();
    novoAluno.codigo_matricula = dados.codigo_matricula;
    novoAluno.nome_completo = dados.nome_completo;
    novoAluno.situacao = dados.situacao;

    this.alunos.push(novoAluno);
    return novoAluno; // Retorna o aluno que acabou de ser criado
  }

  findAll() {
    return this.alunos; // Retorna a lista de todos os alunos
  }

  findOne(codigo_matricula: string) {
    const aluno = this.alunos.find(a => a.codigo_matricula === codigo_matricula);
    
    if (!aluno) {
      throw new NotFoundException(`Aluno com matrícula ${codigo_matricula} não encontrado.`);
    }
    
    return aluno; // Retorna os dados do aluno encontrado
  }

  update(codigo_matricula: string, dados: Partial<Aluno>) {
    const index = this.alunos.findIndex(aluno => aluno.codigo_matricula === codigo_matricula);
    
    if (index < 0) {
      throw new NotFoundException(`Não foi possível atualizar: matrícula ${codigo_matricula} não encontrada.`);
    }

    // Mescla os dados antigos com os novos
    this.alunos[index] = { ...this.alunos[index], ...dados };
    
    return this.alunos[index]; // Retorna o aluno já com os dados atualizados
  }

  remove(codigo_matricula: string) {
    const index = this.alunos.findIndex(aluno => aluno.codigo_matricula === codigo_matricula);
    
    if (index < 0) {
      throw new NotFoundException(`Não foi possível remover: matrícula ${codigo_matricula} não encontrada.`);
    }

    // Remove o aluno da lista
    this.alunos.splice(index, 1);
    
    return { mensagem: `O aluno da matrícula ${codigo_matricula} foi removido com sucesso.` };
  }
}