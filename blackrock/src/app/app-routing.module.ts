import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ResultsComponent } from './pages/results/results.component';
import { QuizMainComponent } from './pages/quiz-main/quiz-main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { SpinnerComponent } from './pages/spinner/spinner.component';


const routes: Routes = [
  {  path:"", component:HomeComponent, pathMatch:"full"},
  {path:"quiz", component:QuizComponent, pathMatch:"full"},
  { path:"edit", component:EditProfileComponent, pathMatch:"full"},
   {path:"results", component:ResultsComponent, pathMatch:"full"},
  { path:"startquiz", component:QuizMainComponent, pathMatch:"full"},
  {path:"profile", component:ProfileComponent, pathMatch:"full"},
  {path:"courses", component:CoursesComponent, pathMatch:"full"},  
  {path:"loading", component:SpinnerComponent, pathMatch:"full"},  
  { path: '**', redirectTo:"", pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
