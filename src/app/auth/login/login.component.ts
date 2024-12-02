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
  showPassword: boolean = false;
  errorMessage: string = '';

  constructor(private ApiService: ApiService, private router: Router) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    this.ApiService.login(this.email, this.password).subscribe(
      response => {
        console.log(response)
        const user = response.find((item: any) => item.email === this.email && item.password === this.password);
        if (user) {
          this.router.navigate(['/dashboard']);
          console.log('Login bem-sucedido:', response[0]);
        } else {
          this.errorMessage = 'Email ou senha incorretos!';
        }
      },
      error => {
        this.errorMessage = 'Erro ao conectar ao servidor. Tente novamente mais tarde.';
      }
    );
  }
}
