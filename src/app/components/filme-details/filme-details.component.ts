import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    diretor: ""
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.filme = {
      titulo: "Matrix",
      ano: "2016",
      diretor: "antonio bandeiras"
    }
  }

  list(){
    this.router.navigate(['filmes']);
  }

}
