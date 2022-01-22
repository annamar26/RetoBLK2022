import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { user } from '../../classes/user';
import { EmailValidator } from '@angular/forms';

const ruta = "https://fakeapi-bk.herokuapp.com/users"

@Injectable({
  providedIn: 'root'
})
export class FakeAPIService {
  constructor(private http: HttpClient) { }

   register(user: user) {
    return this.http.post(`${ruta}`, user);
  }

   getUserData(email: string, password:string){
    return this.http.get(`${ruta}`, {params: {email: email, password: password}})
  }
	getEmailUser(email: string){
		return this.http.get(`${ruta}`, {params: {email: email}})
	}
//
   updateUserData(id:number, user: user) {
    return this.http.patch(`${ruta}/${id}`, user);
  }


}
