import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = signal(false);
  userName = signal<string | null>(null);

  login(name: string){
    this.isAuthenticated.set(true);
    this.userName.set(name);
  }

  logout(){
    this.isAuthenticated.set(false);
    this.userName.set(null);
  }
  
}
