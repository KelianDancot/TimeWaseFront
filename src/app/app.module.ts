import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { UserService } from './user.service';
import { GoalService } from './goal.service';
import { GoalReportService } from './goal-report.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalListComponent,
    GoalFormComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, GoalService, GoalReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
