import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  loginUser(loginData: any) {
    // here we call the api for login user and getting token from api.
    // then we save this token in local storage.
    localStorage.setItem('token', 'loged in');
    return true;
  }

  get isLogedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
