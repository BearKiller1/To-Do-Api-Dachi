import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodolistComponent } from './menu/todolist/todolist.component';
import { CalendarComponent } from './menu/calendar/calendar.component';
import { ProjectsComponent } from './menu/projects/projects.component';
import { SettingsComponent } from './menu/settings/settings.component';
import { DetailComponent } from './menu/detail/detail.component';
import { AlltasksComponent } from './menu/alltasks/alltasks.component';
import { FilterComponent } from './menu/filter/filter.component';
import { TasknotfoundComponent } from './menu/tasknotfound/tasknotfound.component';
import { PagenotfoundComponent } from './menu/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:"todolist",
    component:TodolistComponent,
    children:[
      {
        path:"detail/:id",
        component:DetailComponent,
      },
      {
        path:"alltasks",
        component:AlltasksComponent,
      },
      {
        path:"filter",
        component:FilterComponent,
      },
      {
        path:"",
        redirectTo:"alltasks",
        pathMatch:"full",
      },
      {
        path:"**",
        component:TasknotfoundComponent,
      }
    ]
  },
  {
    path:"calendar",
    component:CalendarComponent,
  },
  {
    path:"projects",
    component:ProjectsComponent,
  },
  {
    path:"settings",
    component:SettingsComponent,
  },
  {
    path:"",
    redirectTo:"todolist",
    pathMatch:"full",
  },
  {
    path:"**",
    component:PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
