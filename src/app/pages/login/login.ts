import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html'
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  login(email: string, password: string) {

    this.authService.login(email, password).subscribe({
      next: (res:any) => {

        console.log("TOKEN :", res.token);

        localStorage.setItem("token", res.token);

      },
      error: err => console.log(err)
    });

  }
}