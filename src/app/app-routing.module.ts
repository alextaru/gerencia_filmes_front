import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeListComponent } from "./components/filme-list/filme-list.component";
import { CreateFilmeComponent } from "./components/create-filme/create-filme.component";
import { FilmeDetailsComponent } from "./components/filme-details/filme-details.component";
import { UpdateFilmeComponent } from "./components/update-filme/update-filme.component";

const routes: Routes = [
  {path: '', redirectTo: 'filmes', pathMatch: 'full'},
  {path: 'filmes', component: FilmeListComponent },
  {path: 'add', component: CreateFilmeComponent },
  {path: 'details/:id', component: FilmeDetailsComponent },
  { path: 'update/:id', component: UpdateFilmeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
