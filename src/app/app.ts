import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './Services/auth.service'; // on va créer ce service
import { LoginComponent } from './pages/login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log("ANGULAR DEMARRE"); // pour tester le démarrage
    this.authService.testApi().subscribe({
      next: res => console.log('API OK:', res),
      error: err => console.error('API ERROR:', err)
    });
  }
}