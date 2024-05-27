import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected headers() {
    return {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    };
  }

  readonly apiUrl = "http://localhost:8080";

  readonly ENDPOINT_USER_INFORMATION = "/api/users";

  constructor(private http: HttpClient) {}

  getUserInformations(): Observable<any> {
    const httpOptions = this.headers(); // Utilisation de la méthode headers() pour obtenir les headers
    return this.http.get<any>(this.apiUrl + this.ENDPOINT_USER_INFORMATION, httpOptions);
  }

  getUsers(): Observable<any[]> {
    const httpOptions = this.headers(); // Utilisation de la méthode headers() pour obtenir les headers
    return this.http.get<any[]>(this.apiUrl + this.ENDPOINT_USER_INFORMATION, httpOptions);
  }
}
