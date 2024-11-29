import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private ApiService: ApiService) {}

  onLogin(): void {
    this.ApiService.login(this.email, this.password).subscribe(
      response => {
        console.log('Login bem-sucedido', response);
      },
      error => {
        this.errorMessage = 'Email ou senha incorretos!';
      }
    );
  }
}
