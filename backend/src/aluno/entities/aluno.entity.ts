export class Aluno {
  codigo_matricula: string;
  nome_completo: string;
  situacao: string; // <-- Agora sim!
    constructor(){
        this.situacao="cursando";
    }
}
