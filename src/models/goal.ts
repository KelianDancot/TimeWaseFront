import { User } from './user';

export interface Goal {
  goalId: number;
  user: User;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  finished: boolean;
}
