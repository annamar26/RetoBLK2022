import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {  path:"", component:HomeComponent, pathMatch:"full"},
  {path:"quiz", component:QuizComponent, pathMatch:"full"},
   {path:"results", component:ResultsComponent, pathMatch:"full"},
  { path: '**', redirectTo:"", pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
