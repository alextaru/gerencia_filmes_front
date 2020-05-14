import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmesService } from "../../services/filmes.service";

@Component({
  selector: 'app-filme-details',
  templateUrl: './filme-details.component.html',
  styleUrls: ['./filme-details.component.css']
})
export class FilmeDetailsComponent implements OnInit {

  id: number;
  filme = {
    titulo: "",
    ano: "",
    sinopse: "",
    diretor: "",
    atores: []
  };

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
        this.filme.atores =  Object.values(this.filme.atores)
    },error => console.log(error))
  }

  list(){
    this.router.navigate(['filmes']);
  }

}
