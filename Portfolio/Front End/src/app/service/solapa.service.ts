import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Solapa } from '../model/solapa';

@Injectable({
  providedIn: 'root'
})
export class SolapaService {
  URL = environment.URL + 'solapa/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Solapa[]>{
    return this.httpClient.get<Solapa[]>(this.URL + 'lista');
  }

  public detail(id:number):Observable<Solapa>{
    return this.httpClient.get<Solapa>(this.URL + `detail/${id}`);
  }

  public save (solapa: Solapa): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', solapa);
  }

  public update(id: number, solapa: Solapa): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, solapa);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
