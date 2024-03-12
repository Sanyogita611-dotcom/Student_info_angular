import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './Students/students-view/students-list/students-list.component';
import { StudentuiComponent } from './ViewStudent/studentui/studentui.component';

const routes: Routes = [{
  path :'',component:StudentsListComponent
},
{
  path :'students',component:StudentsListComponent
},
{
  path :'students/:id',component:StudentuiComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
