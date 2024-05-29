import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal.service';
import { Goal } from '../../models/goal';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit {
  goals: Goal[] = [];

  constructor(private goalService: GoalService) {}

  ngOnInit(): void {
    this.fetchGoals();
  }

  fetchGoals(): void {
    this.goalService.getGoals().subscribe((data: Goal[]) => {
      this.goals = data;
    });
  }

  getProgress(goal: Goal): number {
    const now = new Date();
    const startDate = new Date(goal.startDate);
    const endDate = new Date(goal.endDate);
    const totalTime = endDate.getTime() - startDate.getTime();
    const elapsedTime = now.getTime() - startDate.getTime();
    return Math.min((elapsedTime / totalTime) * 100, 100);
  }

  completeGoal(goal: Goal): void {
    // Implement the logic to mark the goal as completed
    console.log('Completing goal:', goal);
  }

  deleteGoal(goal: Goal): void {
    // Implement the logic to delete the goal
    console.log('Deleting goal:', goal);
  }
}
