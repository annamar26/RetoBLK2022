import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from "@angular/common/http";
import { FormApiComponent } from './components/form-api/form-api.component';
import { FourthquestionComponent } from './components/fourthquestion/fourthquestion.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ChipComponent } from './components/chip/chip.component';
import {MatChipsModule} from '@angular/material/chips';
import { FooterComponent } from './components/footer/footer.component';
import { FirstQuestionComponent } from './components/first-question/first-question.component';
import { QuizStartComponent } from './components/quiz-start/quiz-start.component';
import {MatStepperModule} from '@angular/material/stepper';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GifHelloComponent } from './components/gif-hello/gif-hello.component';
import { ThirdQuestionComponent } from './components/third-question/third-question.component'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SecondquestionComponent } from './components/secondquestion/secondquestion.component';
import { MatSliderModule } from '@angular/material/slider';
import { FifthQuestionComponent } from './components/fifth-question/fifth-question.component'
import {MatCardModule} from '@angular/material/card';
import { QuizComponent } from './pages/quiz/quiz.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import {MatSelectModule} from '@angular/material/select';
import { ResultsComponent } from './pages/results/results.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { QuizMainComponent } from './pages/quiz-main/quiz-main.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormApiComponent,
    FourthquestionComponent,
    ChipComponent,
    FooterComponent,
    FirstQuestionComponent,
    QuizStartComponent,
    QuizComponent,
    HeaderComponent,
    HomeComponent,
    ModalLoginComponent,
    GifHelloComponent,
    ThirdQuestionComponent,
    SecondquestionComponent,
    FifthQuestionComponent,
    ProfileComponent,
    FifthQuestionComponent,
      PersonalInformationComponent,
     ResultsComponent,
      CoursesComponent,
    FifthQuestionComponent,
      EditProfileComponent,
      QuizMainComponent,
      RegisterComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    DragDropModule,
    MatChipsModule,
    MatStepperModule,
    MatDialogModule,
		MatSliderModule,
    MatDialogModule,
    MatCheckboxModule,
    MatCardModule,
		MatProgressBarModule,
    MatSelectModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }