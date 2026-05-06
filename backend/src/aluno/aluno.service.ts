import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunoService {
  private alunos:Aluno
  create(codigo_matricula:string, nome_completo:string,situacao:string) {
    const matriculas= new Aluno();
    matriculas.codigo_matricula=codigo_matricula;
    matriculas.codigo_matricula=nome_completo;
    matriculas.codigo_matricula=situacao;
    
    return 'This action adds a new aluno';
  }

  findAll() {
    return this.alunos;
  }

  findOne(codigo_matricula:string) {
    return `This action returns a #${codigo_matricula} aluno`;
  }

  update(codigo_matricula, dados:Partial<Aluno>) {
     const index= this.alunos.findIndex(Aluno => Aluno.codigo_matricula === codigo_matricula);
    if(index>=0){
      this.alunos[index]={...this.alunos[index],...dados};
      return `A matricula deste aluno #${codigo_matricula} foi atualizado com sucesso.`;
    }
    return `A matricula do aluno #${codigo_matricula} não foi atualizada`;
  }

  remove(codigo_matricula:string) {
    return `This action removes a #${codigo_matricula} aluno`;
  }
}
