import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afAuth: AngularFireAuth) { }

  singIn=async (email: string, password: string)=>{
      return await this.afAuth.createUserWithEmailAndPassword(email,password)
   }
   logIn=async (email: string, password: string)=>{
    return await this.afAuth.signInWithEmailAndPassword(email,password)
   }
  getUser=()=>{
     return this.afAuth.authState
   }
  
  
}
