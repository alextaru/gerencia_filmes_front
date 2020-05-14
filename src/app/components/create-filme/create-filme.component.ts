import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from "../../services/filmes.service";

@Component({
  selector: 'app-create-filme',
  templateUrl: './create-filme.component.html',
  styleUrls: ['./create-filme.component.css']
})
export class CreateFilmeComponent implements OnInit {

  submitted = false;
  filme = {
    titulo: "",
    sinopse: "",
    ano: "",
    diretor: "",
    atoresList: ""
  }

  constructor(
    private filmesService: FilmesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.filmesService.createFilme(this.filme)
      .subscribe(data =>{
        this.gotoList();
      },
      error => console.log(error))
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['filmes']);
  }

}
