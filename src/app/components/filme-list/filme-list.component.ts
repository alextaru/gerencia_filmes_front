import { async } from '@angular/core/testing';
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

  timer: NodeJS.Timeout

  busca = ""

  constructor(
    private router: Router,
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {

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

  async buscarFilme(event){
    if(this.busca.length == 3){

      clearTimeout(this.timer);

      this.timer = setTimeout( async () =>{
        const result = await this.filmesService.getByTytle(this.busca).toPromise()
        if(result){
          this.filmes = Object.values(result);
        }
      }, 1000);
    }
  }


}
