import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalService } from '../goal.service';
import { Goal } from '../../models/goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.scss']
})
export class GoalFormComponent implements OnInit {
  goal: Goal = {
    goalId: 0,
    user: { userId: 1, username: '', email: '', passwordHash: '', createdAt: new Date() }, // Temp data, adjust as needed
    title: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    finished: false
  };
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private goalService: GoalService
  ) {}

  ngOnInit(): void {
    const goalId = this.route.snapshot.paramMap.get('id');
    if (goalId) {
      this.isEditMode = true;
      this.goalService.getGoals().subscribe(goals => {
        this.goal = goals.find(goal => goal.goalId === +goalId) as Goal;
      });
    }
  }

  saveGoal(): void {
    if (this.isEditMode) {
      this.goalService.updateGoal(this.goal).subscribe(() => {
        this.router.navigate(['/goals']);
      });
    } else {
      this.goalService.addGoal(this.goal).subscribe(() => {
        this.router.navigate(['/goals']);
      });
    }
  }
}
