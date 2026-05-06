import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { Aluno } from './entities/aluno.entity';

@Controller('alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  create(@Body() dados: { codigo_matricula: string; nome_completo: string; situacao: string; }) {
    // Agora o Service está preparado para receber este objeto!
    return this.alunoService.create(dados);
  }

  @Get()
  findAll() {
    return this.alunoService.findAll();
  }

  @Get(':codigo_matricula')
  findOne(@Param('codigo_matricula') codigo_matricula: string) {
    return this.alunoService.findOne(codigo_matricula);
  }

  @Patch(':codigo_matricula')
  update(@Param('codigo_matricula') codigo_matricula: string, @Body() dados: Partial<Aluno>) {
    return this.alunoService.update(codigo_matricula, dados);
  }

  @Delete(':codigo_matricula')
  remove(@Param('codigo_matricula') codigo_matricula: string) {
    return this.alunoService.remove(codigo_matricula);
  }
}
