import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist/todolist.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { DetailComponent } from './detail/detail.component';
import { AlltasksComponent } from './alltasks/alltasks.component';
import { TasknotfoundComponent } from './tasknotfound/tasknotfound.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [TodolistComponent, CalendarComponent, ProjectsComponent, SettingsComponent, DetailComponent, AlltasksComponent, TasknotfoundComponent, PagenotfoundComponent, FilterComponent],
  imports: [
    CommonModule
  ],
  exports:[TodolistComponent, CalendarComponent, ProjectsComponent, SettingsComponent, DetailComponent, AlltasksComponent, TasknotfoundComponent, PagenotfoundComponent, FilterComponent]
})
export class MenuModule { }
