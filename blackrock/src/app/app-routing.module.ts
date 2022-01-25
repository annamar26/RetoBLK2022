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
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { CanvasComponent } from './pages/canvas/canvas.component';

const redirectLoggedInToILogin = () => redirectLoggedInTo(['profile']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const routes: Routes = [
  {  path:"", component:HomeComponent, pathMatch:"full"},
  {path:"data", component:CanvasComponent, pathMatch:"full", canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path:"quiz", component:QuizComponent, pathMatch:"full", canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToILogin }},
  { path:"edit", component:EditProfileComponent, pathMatch:"full", canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
   {path:"results", component:ResultsComponent, pathMatch:"full", canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToILogin }},
  { path:"startquiz", component:QuizMainComponent, pathMatch:"full", canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToILogin }},
  {path:"profile", component:ProfileComponent, pathMatch:"full", canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path:"courses", component:CoursesComponent, pathMatch:"full", canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},  
  {path:"loading", component:SpinnerComponent, pathMatch:"full", canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToILogin }},  
  { path: '**', redirectTo:"", pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
