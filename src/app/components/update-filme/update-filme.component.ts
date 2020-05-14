import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-filme',
  templateUrl: './update-filme.component.html',
  styleUrls: ['./update-filme.component.css']
})
export class UpdateFilmeComponent implements OnInit {
  id: number;
  filme = {
    id: 1,
    titulo: "",
    ano: "",
    diretor: ""
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.filme = {
      id: 1,
      titulo: "Matrix",
      ano: "2016",
      diretor: "antonio bandeiras"
    };
  }

  updateFilme(): void{
    this.gotoList();
  }

  onSubmit(): void {
    this.updateFilme();
  }

  gotoList(): void {
    this.router.navigate(['filmes']);
  }

}
