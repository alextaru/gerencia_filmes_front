import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-filme',
  templateUrl: './create-filme.component.html',
  styleUrls: ['./create-filme.component.css']
})
export class CreateFilmeComponent implements OnInit {

  submitted = false;
  filme = {
    titulo: "",
    ano: "",
    diretor: ""
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['filmes']);
  }

}
