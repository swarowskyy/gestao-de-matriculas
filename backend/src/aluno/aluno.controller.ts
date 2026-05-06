import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';

@Controller('alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  create(@Body() dados:{ codigo_matricula:string; nome_completo:string; situacao:string;}) {
    return this.alunoService.create(dados.codigo_matricula,dados);
  }

  @Get()
  findAll() {
    return this.alunoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') ) {
    return this.alunoService.findOne();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dados:Partial<Aluno>) {
    return this.alunoService.update(+id, dados);
  }

  @Delete('id')
  remove(@Param('id') id: string) {
    return this.alunoService.remove(+id);
  }
}
