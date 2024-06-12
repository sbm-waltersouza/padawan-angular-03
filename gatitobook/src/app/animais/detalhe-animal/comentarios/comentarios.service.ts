import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentarios } from './comentarios';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http:HttpClient) { }

  buscaComentario(id: number) : Observable<Comentarios> {
    return this.http.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  incluiComentario(id:number, commentTex: string) : Observable<Comentarios> {
    return this.http.post<Comentarios>(`${API}/photos/${id}/comments`, commentTex);
  }
}
