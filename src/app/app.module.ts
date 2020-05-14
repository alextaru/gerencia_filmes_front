import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmeListComponent } from './components/filme-list/filme-list.component';
import { CreateFilmeComponent } from './components/create-filme/create-filme.component';
import { FilmeDetailsComponent } from './components/filme-details/filme-details.component';
import { UpdateFilmeComponent } from './components/update-filme/update-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeListComponent,
    CreateFilmeComponent,
    FilmeDetailsComponent,
    UpdateFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
