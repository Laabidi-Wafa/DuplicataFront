import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/_services/auth.service';

@Component({
  selector: 'app-compteAgent',
  templateUrl: './compteAgent.component.html',
  styleUrls: ['./compteAgent.component.css']
})
export class CompteAgentComponent implements OnInit {
        form: any = {};
        isSuccessful = false;
        isSignUpFailed = false;
        errorMessage = '';
        constructor(private authService: AuthService) { }
        ngOnInit() {
        }
        onSubmit() {
          this.authService.creeruncompte(this.form).subscribe(
            data => {
              console.log(data);
              this.isSuccessful = true;
              this.isSignUpFailed = false;
            },
            err => {
              this.errorMessage = err.error.message;
              this.isSignUpFailed = true;
            }
          );
        }
      }


