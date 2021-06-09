import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/_services/auth.service';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-loginfirst',
  templateUrl: './loginfirst.component.html',
  styleUrls: ['./loginfirst.component.css']
})
export class LoginfirstComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  showAdminBoard = false;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }
   ngOnInit() {
        if (this.tokenStorage.getToken()) {
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
        }
          if (this.isLoggedIn) {
            const user = this.tokenStorage.getUser();
            this.roles = user.roles;
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        }
      }
        onSubmit() {
        this.authService.login(this.form).subscribe(
          data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.reloadPage();
          },
          err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          }
        );
      }
      reloadPage() {
        window.location.reload();
      }
    }
