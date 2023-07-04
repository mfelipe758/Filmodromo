import { Component } from '@angular/core';
import { Filme } from './filme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filmes: Filme[] = [];
  novoFilme: Filme = {
    nome: '',
    sinopse: '',
    assistido: false
  };

  adicionarFilme() {
    const filme: Filme = {
      nome: this.novoFilme.nome,
      sinopse: this.novoFilme.sinopse,
      assistido: false
    };
    this.filmes.push(filme);
    this.novoFilme = {
      nome: '',
      sinopse: '',
      assistido: false
    };
    this.ordenarFilmes();
  }

  removerFilme(filme: Filme) {
    const index = this.filmes.indexOf(filme);
    if (index > -1) {
      this.filmes.splice(index, 1);
    }
  }

  avaliarFilme(filme: Filme, avaliacao: boolean) {
    filme.avaliacao = avaliacao;
    this.ordenarFilmes();
  }

  adicionarComentario(filme: Filme, comentario: string) {
    filme.comentario = comentario;
  }

  ordenarFilmes() {
    this.filmes.sort((a, b) => {
      if (a.assistido && !b.assistido) {
        return 1;
      } else if (!a.assistido && b.assistido) {
        return -1;
      } else {
        return 0;
      }
    });
   
  }
  
}





