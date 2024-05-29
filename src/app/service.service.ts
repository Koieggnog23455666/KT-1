import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  private authKey = 'isAuthenticated';
  private userKey = 'user';

  login(username: string, password: string): boolean {
    const storedUsername = 'admin'; // Replace with the actual username
    const storedPassword = 'password'; // Replace with the actual password

    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem(this.authKey, 'true');
      localStorage.setItem(this.userKey, username);
      return true;
    } else {
      return false;
    }
  }
  isAuthenticated(): boolean {
    return localStorage.getItem(this.authKey) === 'true';
  }

  getUser(): string | null {
    return localStorage.getItem(this.userKey);
  }
}
