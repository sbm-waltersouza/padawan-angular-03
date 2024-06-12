import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Animais, Animal } from './animais';
import { TokenService } from '../autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { catchError, mapTo } from 'rxjs/operators';
import { error } from 'console';

const API = environment.apiURL;
const NOT_MOFIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario:string) :Observable<Animais> {
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`,)
  }

  buscarPorID(id:number) : Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }

  excluiAnimal(id:number) : Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  curtir(id:number) : Observable<boolean> {
    return this.http.post(`${API}/photos/${id}/like`, {}, {observe: 'response'}).pipe(mapTo(true),catchError((error) => {
      return error.status === NOT_MOFIFIED ? of(false) : throwError(error);
    }))
  }

}
