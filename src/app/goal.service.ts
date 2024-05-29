import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goal } from '../models/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  protected headers() {
    return {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    };
  }

  readonly apiUrl = "http://localhost:8080";
  readonly ENDPOINT_GOALS = "/api/goals";

  constructor(private http: HttpClient) {}

  getGoals(): Observable<Goal[]> {
    const httpOptions = this.headers();
    return this.http.get<Goal[]>(this.apiUrl + this.ENDPOINT_GOALS, httpOptions);
  }

  addGoal(goal: Goal): Observable<Goal> {
    const httpOptions = this.headers();
    return this.http.post<Goal>(this.apiUrl + this.ENDPOINT_GOALS, goal, httpOptions);
  }

  updateGoal(goal: Goal): Observable<Goal> {
    const httpOptions = this.headers();
    return this.http.put<Goal>(`${this.apiUrl + this.ENDPOINT_GOALS}/${goal.goalId}`, goal, httpOptions);
  }

  markGoalAsFinished(goalId: number): Observable<void> {
    const httpOptions = this.headers();
    return this.http.patch<void>(`${this.apiUrl + this.ENDPOINT_GOALS}/${goalId}/finish`, null, httpOptions);
  }
}
