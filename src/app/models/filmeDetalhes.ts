import { Diretor } from "./diretor";
import { Ator } from "./ator";

export class FilmeDetalhes {
  titulo: string;
  ano: number;
  sinopse: string;
  diretores: Diretor;
  atores: Array<Ator>;
}
