import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmesService } from "../../services/filmes.service";
import { FilmeDetalhes } from "../../models/filmeDetalhes";

@Component({
  selector: 'app-filme-details',
  templateUrl: './filme-details.component.html',
  styleUrls: ['./filme-details.component.css']
})
export class FilmeDetailsComponent implements OnInit {

  id: number;
  filme: FilmeDetalhes;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.filmesService.getFilme(this.id)
      .subscribe(data =>{
        this.filme = data
    },error => console.log(error))
  }

  list(){
    this.router.navigate(['filmes']);
  }

}
