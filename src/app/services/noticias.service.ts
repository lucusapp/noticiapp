import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }

  getTopHeadlines(){
    return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-11&sortBy=publishedAt&apiKey=3d9b9d5ac32a4b7b941e0ababd87a1a7`)

  }
}
