import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoalReport } from '../models/goal-report';

@Injectable({
  providedIn: 'root'
})
export class GoalReportService {
  protected headers() {
    return {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    };
  }

  readonly apiUrl = "http://localhost:8080";
  readonly ENDPOINT_GOAL_REPORTS = "/api/goal-reports";

  constructor(private http: HttpClient) {}

  getGoalReports(): Observable<GoalReport[]> {
    const httpOptions = this.headers();
    return this.http.get<GoalReport[]>(this.apiUrl + this.ENDPOINT_GOAL_REPORTS, httpOptions);
  }
}
