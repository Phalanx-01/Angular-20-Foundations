import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
  constructor(public auth: AuthService){}

    login() {
      this.auth.login('Luke Skywalker');
    }

}
