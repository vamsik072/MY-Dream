import { CoursefeeComponent } from './Routing/coursefee/coursefee.component';
import { CoursedurationComponent } from './Routing/courseduration/courseduration.component';
import { CoursedetailsComponent } from './Routing/coursedetails/coursedetails.component';
import { PagenotComponent } from './Routing/pagenot/pagenot.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourselistComponent } from './Routing/courselist/courselist.component';
import { StulistComponent } from './Routing/stulist/stulist.component';




const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StulistComponent },
  { path: 'course', component: CourselistComponent },


  {
    path: 'course/:id',
    component: CoursedetailsComponent,
    children: [
      { path: 'duration',loadChildren: () => import("./Routing/courseduration/courseduration.component").then(m => m.CoursedurationComponent) },
      { path: 'fee', component: CoursefeeComponent }
    ]
  },
  { path: "**", component: PagenotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
    
  ]
})
export class AppRoutingModule { }
