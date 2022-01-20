import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { user } from '../../classes/user';

const ruta = "https://fakeapi-bk.herokuapp.com/users"

@Injectable({
  providedIn: 'root'
})
export class FakeAPIService {
  constructor(private http: HttpClient) { }

   register(user: user) {
    return this.http.post(`${ruta}`, user);
  }

   getUsersData(){
    return this.http.get(`${ruta}`)
  }
//   


}
