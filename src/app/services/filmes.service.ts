import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private baseUrl = 'http://localhost:3000/api/filmes';

  constructor(
    private http: HttpClient
  ) { }

  getFilme(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllFilme(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getByTytle(titulo: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/titulo/${titulo}`);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  createFilme(filme: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, filme);
  }
}
