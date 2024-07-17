import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuildService {
  private apiUrl = 'https://rubinot-back-bellum-baansps5a-luccasgos-projects.vercel.app/guild';

  constructor(private http: HttpClient) {}

  getGuildCharacters(): Observable<any> {
    const headers = new HttpHeaders({
      // Inclua outros cabeçalhos aqui conforme necessário
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
    });

    return this.http.get(this.apiUrl, { headers });
  }
}


