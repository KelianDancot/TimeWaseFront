import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalFormComponent } from './goal-form/goal-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'goals', component: GoalListComponent },
      { path: 'add-goal', component: GoalFormComponent },
      { path: 'edit-goal/:id', component: GoalFormComponent },
      { path: '', redirectTo: 'goals', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
