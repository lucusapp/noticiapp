import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';



const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl

const headers = new HttpHeaders({
  'X-Api-Key':apiKey
})




@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }

  private ejecutarQuery<T>(query:string){
    query = apiUrl + query
    return this.http.get<T>(query, {headers})
  }

  getTopHeadlines(){
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us`);
    // return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=564d10ec515040ac82d1d4da79b77291`)
    
  }
  getTopHeadlinesCategorias(categoria:string){
    
    // return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=564d10ec515040ac82d1d4da79b77291`)
    
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${categoria}`);
    
  }
}
