import { Goal } from './goal';
import { User } from './user';

export interface GoalReport {
  reportId: number;
  goal: Goal;
  user: User;
  content: string;
  createdAt: Date;
}
