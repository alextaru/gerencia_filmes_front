import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {

  filmes = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.filmes.push({
      id: 1,
      titulo: "Matrix",
      ano: "2016",
      diretor: "antonio bandeiras"
    })
  }

  deleteFilme(id: Number): void {

  }

  filmeDetalhes(id: Number): void {
    this.router.navigate(['details', id]);
  }

  updateFilme(id: Number): void {
    this.router.navigate(['update', id]);
  }


}
