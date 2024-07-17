import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuildService {
  private apiUrl = 'http://localhost:3000/api/guild';

  constructor(private http: HttpClient) {}

  getGuildCharacters(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
