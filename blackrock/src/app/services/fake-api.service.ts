import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { user } from '../../classes/user';

const ruta = "https://fakeapi-bk.herokuapp.com/users"

@Injectable({
  providedIn: 'root'
})
export class FakeAPIService {
  constructor(private http: HttpClient) { }

   async register(user: user) {
    return await this.http.post(`${ruta}`, user);
  }

  async getUserData(email: string, password:string){
    return await this.http.get(`${ruta}`, {params: {email: email, password: password}})
  }
	async getEmailUser(email: string){
		return await this.http.get(`${ruta}`, {params: {email: email}})
	}
//
  async updateUserData(id:number, user: user) {
    return await this.http.patch(`${ruta}/${id}`, user);
    
  }


}
