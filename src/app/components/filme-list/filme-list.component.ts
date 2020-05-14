import { Filme } from './../../models/filme';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from "../../services/filmes.service";

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {

  filmes: Filme[]

  constructor(
    private router: Router,
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  async reloadData(): Promise<void> {
    const result = await this.filmesService.getAllFilme().toPromise()
    this.filmes = Object.values(result);
  }

  deleteFilme(id: number): void {
    this.filmesService.remove(id)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
  }

  filmeDetalhes(id: Number): void {
    this.router.navigate(['details', id]);
  }

  updateFilme(id: Number): void {
    this.router.navigate(['update', id]);
  }


}
