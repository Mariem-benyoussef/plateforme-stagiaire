import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
    constructor(private http: HttpClient) { }

  getStagiaire(id: number): Observable<any> {
    return this.http.get(`${'http://localhost:8080/stagiaires/all'}/${id}`);
  }

  createStagiaire(Stagiare: Object): Observable<Object> {
    return this.http.post(`${'http://localhost:8080/stagiaires/add'}`, Stagiare);
  }

  updateStagiaire(id: number, value: any): Observable<Object> {
    return this.http.put(`${'http://localhost:8080/stagiaires/update'}/${id}`, value);
  }

  deleteStagiaire(id: number): Observable<any> {
    return this.http.delete(`${'http://localhost:8080/stagiaires/delete'}/${id}`, { responseType: 'text' });
  }

  getStagiairesList(): Observable<any> {
    return this.http.get(`${'http://localhost:8080/stagiaires/all'}`);
  }
}
