import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { user } from '../../classes/user';

const ruta = "https://fakeapi-bk.herokuapp.com"

@Injectable({
  providedIn: 'root',
})
export class FakeAPIService {
  constructor(private http: HttpClient) {}

  register(user: user) {
    return this.http.post(`${ruta}/users`, user);
  }

  getUserData(email: string, password: string) {
    return this.http.get(`${ruta}/users`, {
      params: { email: email, password: password },
    });
  }
  getEmailUser(email: string) {
    return this.http.get(`${ruta}/users`, { params: { email: email } });
  }
  //
  updateUserData(id: number, user: user) {
    return this.http.patch(`${ruta}/users/${id}`, user);
  }
  getLevelData(level: string) {
    return this.http.get(`${ruta}/courses`, { params: { level: level } });
  }
}
