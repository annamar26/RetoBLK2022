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
import { QuizComponent } from './pages/quiz/quiz.component';



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
    GifHelloComponent

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
    MatChipsModule, 
    MatDialogModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }