import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // Method to handle login
  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Add authentication logic here (e.g., API call)
  }
}